import { renderToString } from '@vue/server-renderer';
import { app } from '../main.js';

export async function render(url, manifest, api_config_override = {}) {
  const h = await renderToString(app);
  return h;
}
