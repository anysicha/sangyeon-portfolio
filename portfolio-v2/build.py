"""Generate standalone V2 stories using the original portfolio as read-only input."""
from pathlib import Path
from html.parser import HTMLParser
from html import escape
import shutil
ROOT=Path(__file__).resolve().parent
class Node:
 def __init__(self,tag='',attrs=()):self.tag=tag;self.attrs=dict(attrs);self.children=[]
 def text(self):return ''.join(c.text() if isinstance(c,Node) else c for c in self.children)
 def all(self,fn):return ([self] if fn(self) else [])+sum((c.all(fn) for c in self.children if isinstance(c,Node)),[])
 def find(self,fn):return next(iter(self.all(fn)),None)
class Parser(HTMLParser):
 def __init__(self):super().__init__();self.root=Node();self.stack=[self.root]
 def handle_starttag(self,t,a):
  n=Node(t,a);self.stack[-1].children.append(n)
  if t not in ('br','hr','img','meta','link','input','source','wbr'):self.stack.append(n)
 def handle_endtag(self,t):
  for i in range(len(self.stack)-1,0,-1):
   if self.stack[i].tag==t:self.stack=self.stack[:i];return
 def handle_data(self,s):self.stack[-1].children.append(s)
def cls(n,c):return c in n.attrs.get('class','').split()
def render(n):
 if isinstance(n,str):return escape(n)
 if n.tag=='div' and cls(n,'detail-block') and ('TODO' in n.text() or '확인 후 업데이트' in n.text()):return ''
 if cls(n,'todo'):return ''
 text=''.join(render(c) for c in n.children)
 if n.tag not in {'h2','h3','p','ul','ol','li','strong','em','br','a'}:return text
 attr=''
 if n.tag=='a' and n.attrs.get('href','').startswith(('https://','mailto:','#')):attr=' href="'+escape(n.attrs['href'],quote=True)+'"'
 return '<br>' if n.tag=='br' else f'<{n.tag}{attr}>{text}</{n.tag}>'
covers={'blind-trip':'blind-trip/blind-trip-thumbnail.jpg','golift':'golift/release-02-home-raw.webp','omnibus':'omnibus/omnibus-thumbnail.jpg','mom-map':'mom-map/mom-map-thumbnail.jpg','greencity-ai':'greencity-ai/greencity-thumbnail.jpg','ai-education':'ai-education/ai-summer-school-class.jpg','airforce-pilot':'airforce-pilot/airforce-acceptance.png'}
(ROOT/'dist/projects').mkdir(exist_ok=True)
shutil.copytree(ROOT.parent/'assets/images/airforce-pilot',ROOT/'dist/assets/images/airforce-pilot',dirs_exist_ok=True)
for path in (ROOT.parent/'projects').glob('*.html'):
 if path.stem == 'finance':continue
 p=Parser();p.feed(path.read_text());tree=p.root
 title=tree.find(lambda n:n.tag=='h1').text().strip()
 intro=tree.find(lambda n:cls(n,'detail-intro'));desc=intro.text().strip() if intro else ''
 kicker=tree.find(lambda n:cls(n,'detail-kicker'));tags=tree.find(lambda n:cls(n,'detail-meta'))
 body=tree.find(lambda n:cls(n,'detail-copy')) or tree.find(lambda n:cls(n,'detail-content'))
 content=''.join(render(c) for c in body.children) if body else ''
 cover=f'<figure class="detail-cover {"phone-cover" if path.stem=="golift" else ""}"><img src="../assets/images/{covers[path.stem]}" alt="{escape(title,quote=True)} 프로젝트 이미지" fetchpriority="high"></figure>' if path.stem in covers else ''
 gallery=[]
 for image in tree.all(lambda n:n.tag=='img'):
  src=image.attrs.get('src','')
  if not src.startswith('../assets/images/') or any(s in src for s in ['qr','icon','thumbnail','acceptance','hero-slides']):continue
  if path.stem in covers and src.endswith(covers[path.stem]):continue
  if src in [x[0] for x in gallery]:continue
  if (ROOT/'dist'/src[3:]).exists():gallery.append((src,image.attrs.get('alt',title)))
 gallery_html='<div class="detail-gallery">'+''.join(f'<img src="{escape(src)}" alt="{escape(alt,quote=True)}" loading="lazy">' for src,alt in gallery[:6])+'</div>' if gallery else ''
 app=tree.find(lambda n:n.tag=='a' and n.attrs.get('href','').startswith('https://apps.apple.com'))
 app_html=f'<a class="button primary" href="{escape(app.attrs["href"],quote=True)}" target="_blank" rel="noopener noreferrer">App Store에서 보기</a>' if app else ''
 tag_html=''.join(f'<span>{escape(c.text())}</span>' for c in tags.children if isinstance(c,Node) and c.tag=='span') if tags else ''
 html=f'''<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{escape(title)} — 김상연</title><meta name="description" content="{escape(desc,quote=True)}"><meta name="theme-color" content="#ffffff"><link rel="icon" href="../assets/favicon.svg"><link rel="stylesheet" href="../assets/style.css"><script src="../assets/main.js" defer></script></head><body><a class="skip" href="#main">본문으로 바로가기</a><header class="header"><div class="nav-wrap"><a class="brand" href="../index.html">상연<span class="brand-dot">.</span></a><nav aria-label="주요 메뉴"><a href="../index.html#work">만든 것들</a><a href="../index.html#about">저에 대해</a><a href="../index.html#journey">지나온 길</a></nav><a class="contact-nav" href="../index.html#contact">이야기 나누기</a></div><div class="reading-progress" aria-hidden="true"></div></header><main id="main" class="detail-main"><div class="detail-wrap"><a href="../index.html#work" class="back-link">만든 것들로 돌아가기</a><p class="detail-kicker">{escape(kicker.text()) if kicker else 'Project story'}</p><h1 class="detail-title">{escape(title)}</h1><p class="detail-lead">{escape(desc)}</p><div class="detail-tags">{tag_html}</div>{cover}<div class="detail-body">{app_html}{content}</div>{gallery_html}<div class="detail-bottom"><h2>다른 프로젝트도 둘러보세요.</h2><a class="button secondary" href="../index.html#projects">모든 프로젝트 보기</a></div></div></main><footer class="footer wrap"><a href="../index.html" class="brand">상연<span class="brand-dot">.</span></a><span>© 2026 Sangyeon Kim</span><a href="../index.html#contact">이야기 나누기</a></footer></body></html>'''
 (ROOT/'dist/projects'/path.name).write_text(html)
 print(path.name)

# V2-authored research stories are maintained separately from V1.
for path in (ROOT/"content").glob("*.html"):
 shutil.copy2(path, ROOT/"dist/projects"/path.name)
