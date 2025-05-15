export function executeWhenReady(cb: (...args: any[]) => any) {
  if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      cb();
    });
  } else {
    cb();
  }
}

export function getElementHeight(selector: string) {
  const el = document.querySelector<HTMLElement>(selector);
  if(!el) throw new Error(`${selector} не найден`);
  return el.offsetHeight;
}
