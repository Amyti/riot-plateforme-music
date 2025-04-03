

const clé = "sPVQOLTUrXqgLRRLjABy"; 
const clépassecrete = "SEvKLkaIiSpNomhZNdiOxyVlBGEwOJRA";
const titre_chaud = "damso"

export async function searchDiscogs(query, recherchetype, page = 1) {
    const réponses = await fetch(`https://api.discogs.com/database/search?q=${query}&per_page=20&type=${recherchetype}&key=${clé}&secret=${clépassecrete}&page=${page}`);
    return réponses.json(); 
}

export async function dernierTitre(page = 1) {
    const réponses = await fetch(`https://api.discogs.com/database/search?q=${titre_chaud}&per_page=20&type=release&key=${clé}&secret=${clépassecrete}&page=${page}`);
    return réponses.json(); 
}

export async function dernierArtiste(page = 1) {
    const réponses = await fetch(`https://api.discogs.com/database/search?q=&per_page=20&type=artists&key=${clé}&secret=${clépassecrete}&page=${page}`);
    return réponses.json(); 
}

export async function dernierMasters() {
    const réponses = await fetch(`https://api.discogs.com/database/search?q=&type=masters&key=${clé}&secret=${clépassecrete}`);
    return réponses.json(); 
}


export async function masterdiscogs(master_id) {    
    const réponses = await fetch(`https://api.discogs.com/masters/${master_id}`);
    return réponses.json(); 
   
}

export async function releasediscogs(release_id) {    
    const réponses = await fetch(`https://api.discogs.com/releases/${release_id}`);
    return réponses.json(); 
   
}

export async function artistDiscogs(artists_id) {    
    const réponses = await fetch(`https://api.discogs.com/artists/${artists_id}`);
    return réponses.json(); 
   
}

window.searchDiscogs = searchDiscogs;
window.masterdiscogs = masterdiscogs;
window.artistDiscogs = artistDiscogs;
window.dernierTitre = dernierTitre;
window.dernierArtiste = dernierArtiste;
window.dernierMasters = dernierMasters;
window.releasediscogs = releasediscogs;





