export function createAudio(track) {
    const container = document.createElement('div');
    container.className = 'record';
    container.style.padding = '15px';
    container.style.marginTop = '10px';

 const title = document.createElement('strong');
    // Using track.name from Jamendo API
    title.textContent = `🎵 ${track.name}`;
    title.style.display = 'block';
    title.style.marginBottom = '8px';