# SimplyAlgo 

## Présentation

Nous utilisons les technologies suivantes :

- `Express` pour une application de type API Node Express
- `Mongodb & mongoose` pour une base de données MongoDb avec une surcouche de mongoose
- `React` pour modifier les données sans avoir à recharger la page
- `TypeScript` pour type notre code pour eviter les erreurs et rendre le code plus propre
- `ChakraUI` pour avoir une ui dynamique


## Dépendances

### Server

Pour installer les dépendances du server, il suffit de lancer la commande suivante depuis le répertoire `/server` :

```bash
yarn
```

### UI

Pour installer les dépendances de l'ui, il suffit de lancer la commande suivante depuis le répertoire `/ui` :

```bash
yarn
```

## Lancement de SimplyAlgo

### Server

Pour démarrer le server il suffit de lancer la commande suivante depuis le répertoire `/server` :

```bash
yarn start
```

### Ui

Pour démarrer l'ui, il suffit de lancer la commande suivante depuis le répertoire `/ui` :

```bash
yarn start
```

## Server Node Express

### Routes

#### Post

- feedback
- forum
- forumjs
- register
- login
- deleteuser


#### Get

- feed
- forumMessage
- forumMessageJs
- user
- logout
- getallusers

#### Put

- /user/:id