const iframe = document.createElement('iframe');
iframe.src = 'https://bf-gen.vercel.app/';
iframe.style.border = '0px #ffffff none';
iframe.name = 'myiFrame';
iframe.scrolling = 'no';
iframe.frameBorder = '1';
iframe.marginHeight = '0px';
iframe.marginWidth = '0px';
iframe.height = '740px';
iframe.width = '1100px';
iframe.allowFullscreen = true;

document.body.appendChild(iframe);
