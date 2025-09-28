document.addEventListener('DOMContentLoaded', function() {
    const linksParaIcones = {
        'bi-instagram': 'https://www.instagram.com/rpalternativo',
        'bi-twitter-x': 'https://twitter.com/',
        'bi-facebook': 'https://portalpadrao.ufma.br/',
        'bi-envelope-at-fill': 'mailto:rpalternativo@ufma.br'
    };

    const classesDosIcones = Object.keys(linksParaIcones);

    classesDosIcones.forEach(classe => {
        const icones = document.querySelectorAll('.' + classe);
        icones.forEach(icone => {
            const link = document.createElement('a');
            link.href = linksParaIcones[classe];
            if (!link.href.startsWith('mailto:')) {
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
            }
            
            if(icone.parentNode) {
               icone.parentNode.insertBefore(link, icone);
            }
            link.appendChild(icone);
        });
    });
});