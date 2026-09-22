# Amélioration complète de l’affichage mobile

## Objectif
Rendre tout le portfolio confortable à lire et à utiliser sur petit écran, sans modifier son contenu ni son identité visuelle.

## Changements prévus
- Repenser l’en-tête mobile pour éviter tout chevauchement, conserver des zones tactiles confortables et afficher le menu dans la hauteur disponible.
- Réduire et harmoniser les espacements, tailles de titres et cartes de toutes les sections sur téléphone.
- Adapter les rangées complexes, boutons, badges et textes longs afin qu’ils passent proprement sur plusieurs lignes.
- Rendre les onglets et aperçus de projets faciles à faire défiler horizontalement, sans couper leur contenu.
- Transformer les modales de réservation, d’horaires et d’aperçu projet en panneaux plein écran ou quasi plein écran sur mobile, avec fermeture toujours accessible et contenu défilable.
- Bloquer le défilement de la page derrière une modale ouverte.
- Ajuster le bouton flottant pour qu’il reste compact et n’occulte pas le contenu.
- Corriger le pied de page et le formulaire pour les adresses, libellés et actions longues.

## Vérification
- Tester la page complète à 384 × 722 px et sur écran large.
- Ouvrir le menu mobile et chaque type de modale, puis vérifier le défilement, les boutons et l’absence de débordement horizontal.
- Contrôler les erreurs d’affichage et la compilation après les changements.

## Détails techniques
- Utiliser des grilles mobiles avec colonnes flexibles, `min-w-0`, retours à la ligne et dimensions tactiles stables.
- Ajouter une gestion partagée du verrouillage du défilement pour les fenêtres modales.
- Préserver les animations existantes tout en respectant la préférence de réduction des mouvements.
