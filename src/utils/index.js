import { isMobile } from 'react-device-detect';

export function startVconsole() {
  if (isMobile) {
    const VConsole = require('vconsole');
    new VConsole();
    console.log('[vConsole] started on mobile');
  }
}