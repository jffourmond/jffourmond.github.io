---
layout: post
title: Freelance Impôt, une appli Angular sur du Docker
tags: AngularJS Bootstrap JavaScript NVD3 D3.js Jasmine HTML5 CSS3 Docker Apache GitHub freelance
---
Freelance depuis peu, j'ai développé une petite application me permettant d'avoir une idée 
du montant de l'impot sur le revenu que je devrai payer. J'espère qu'elle pourra être utile à d'autres personnes !

L'application est développée avec AngularJS 1.4 et Bootstrap 3. 
La courbe interactive utilise une directive basée sur NVD3 et D3.js.
L'appli tourne dans un container Docker qui récupère les sources depuis GitHub et les copie dans un Apache. 
Le Dockerfile comme le code source sont disponibles ici : https://github.com/jffourmond/freelance-impot

http://www.freelance-impot.fr


