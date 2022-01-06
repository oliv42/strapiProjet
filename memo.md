# Strapi

## Installation avec postgres

On va utiliser Strapi avec PostgreSQL, il va donc falloir créer une BDD. Rappel : https://kourou.oclock.io/ressources/fiche-recap/postgresql/

On va donc créer une BDD `strapi`, qui sera détenue par un utilisateur `strapi` et qui aura comme mot de passe `strapi`.

Ensuite, se mettre dans un dossier de travail et lancer la commande : `npx create-strapi-app@latest blog`. Cette commande va créer tous les fichiers du projet en vous posant plusieurs questions :
- Choose your installation type -> Custom
- Choose your default database client -> Postgres
- Database name : strapi
- Host -> laisser vide
- Port -> laisser vide
- Username -> strapi
- Password -> strapi
- Enable SSL connection -> laisser vide

_Et voilà_.

## Aller sur l'interface d'amnistration

Comme nous le dit le script d'installation, il va falloir se déplacer dans le dossier créé : `cd blog`, puis lancer le programme Node.js `npm run develop`.

Ensuite, la doc sera votre amie pour manipuler l'interface d'administration : https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html#%F0%9F%9B%A0-part-b-build-your-content
