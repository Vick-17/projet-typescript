# Projet TypeScript avec Node.js

Bienvenue sur le projet TypeScript avec Node.js ! Ce projet est conçu pour vous permettre de démarrer facilement avec TypeScript tout en utilisant Node.js comme environnement d'exécution. Suivez les étapes ci-dessous pour installer, configurer et exécuter le projet.

## Prérequis
1. Node.js : Assurez-vous d'avoir Node.js installé sur votre système. Vous pouvez le vérifier en utilisant la commande suivante :
```
node -v
pnpm -v (ou npm)
```


## Installation

1. Initialisez le projet avec pnpm pour créer le fichier package.json :

```pnpm init -y```

Cela répondra à toutes les questions par défaut.

2. Installez TypeScript comme dépendance de développement :

```pnpm install typescript --save-dev```

## Configurez TypeScript :

1. Créez un fichier tsconfig.json à la racine du projet avec les options suivantes :
```
{
"compilerOptions": {
    "target": "es5",             // JavaScript cible compatible avec Node.js
    "module": "commonjs",        // Utilisation de CommonJS pour l'importation
    "strict": true,               // Activer les types stricts
    "outDir": "./dist"            // Dossier de sortie pour le code compilé
},
"include": ["src/**/*.ts"]    // Fichiers TypeScript à compiler
}
```

## Créez vos fichiers TypeScript :

1. Créez un répertoire src à la racine du projet et un fichier index.ts dans ce répertoire :

// src/index.ts
```console.log("Bonjour depuis TypeScript avec Node.js!");```

2. Compilez TypeScript :

- Pour compiler les fichiers .ts dans src et générer des fichiers .js dans dist, utilisez la commande suivante :

```npx tsc```
Cela créera un fichier index.js dans dist prêt à être exécuté.

3. Exécutez votre application :

- Pour lancer l'application, utilisez Node.js pour exécuter le fichier index.js dans le dossier dist :

```node dist/index.js```

4. Commandes Utiles

- Compiler TypeScript : [npx tsc] - Compile tous les fichiers TypeScript dans src et génère des fichiers .js dans dist.

- Lancer le serveur Node.js : [node dist/index.js] - Exécute l'application JavaScript générée.

- Ajouter une dépendance : [pnpm install <nom-dépendance>] - Installe une nouvelle dépendance dans le projet

- Mettre à jour les dépendances : [pnpm update] Met à jour toutes les dépendances selon les versions spécifiées dans package.json.
Notes Additionnelles

Ce projet est configuré pour vous permettre de démarrer rapidement avec TypeScript et Node.js. N'hésitez pas à modifier la configuration selon vos besoins spécifiques, ajouter de nouvelles dépendances, ou même étendre le projet avec des fonctionnalités supplémentaires.

# Utiliser un "live server" pour TypeScript car compiler a chaque fois c'est chiant

1. Installez un la dépendance ts-node-dev

```pnpm install ts-node-dev --save-dev```

Executer la commande 

```pnpm run dev```

# Pourquoi pnpm

1. Performances améliorées :

Optimisation de l'espace disque : pnpm utilise un mode de stockage de paquets plus compact que npm. Cela signifie qu'il nécessite moins d'espace disque pour stocker les dépendances, ce qui peut être particulièrement utile pour des projets de grande envergure ou des environnements avec des disques à espace limité.
Moins de redondance : pnpm permet de partager les dépendances entre les projets, ce qui réduit la redondance et améliore l'efficacité d'utilisation des ressources.

2. Vitesse :

pnpm est généralement plus rapide que npm dans l'installation des paquets grâce à son utilisation de la version flat mode (mode plat), qui installe les paquets de manière linéaire sans créer de sous-dossiers pour chaque paquet comme le fait npm. Cela permet de réduire le temps d'installation global.

3. Compatibilité avec Node.js :

Bien que pnpm soit différent sous la capot, il reste pleinement compatible avec Node.js. Vous pouvez utiliser pnpm à la place de npm sans avoir à modifier votre code JavaScript/TypeScript ou vos scripts d'installation.

4. Conception pour des projets de grande taille :

pnpm a été conçu pour faciliter la gestion des dépendances dans des projets de grande taille. Il gère mieux les grandes hiérarchies de dépendances et est capable de résoudre les conflits de dépendances plus efficacement que npm.

5. Support pour les projets monorepo :

pnpm est particulièrement puissant lorsqu'il s'agit de gérer des projets monorepo (un seul dépôt pour plusieurs projets ou packages), grâce à sa capacité à utiliser le mode link, qui relie les paquets entre eux, facilitant ainsi le partage et la versioning des dépendances.

6. Commandes plus rapides :

Les commandes pnpm comme pnpm install ou pnpm run dev sont plus rapides que leurs équivalents npm. Cela peut grandement améliorer le flux de travail de développement, en particulier lors des tests et des builds.
En somme, pnpm est souvent préféré dans des contextes où la vitesse, la performance, et l'efficacité dans la gestion des dépendances sont critiques.
