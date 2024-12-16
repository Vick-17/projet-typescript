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