# UD Block: Editorial Layout Block

Layout-Block zur freien Anordnung von Inhaltselementen in einem editorialen Raster.

---

## Übersicht

Dieses Plugin stellt zwei Blöcke zur Verfügung:

- **Editorial Layout (Container)**: Definiert den Layout-Bereich
- **Editorial Item (Einzelelement)**: Frei positionierbares Inhaltselement innerhalb des Layouts

Die Elemente können innerhalb des Containers flexibel angeordnet werden und ermöglichen gestalterisch freie Inhaltslayouts.

---

## Funktionen

- Container-Block für freie Layout-Strukturen
- Editorial Items als flexibel platzierbare Inhaltselemente
- Positionierung der Items (z. B. links / rechts)
- Kombination mehrerer Items innerhalb eines Layouts
- Ideal für Magazin- oder Storytelling-Layouts
- Anchor-Unterstützung für den Container-Block

---

## Rendering-Kontext

**Editorial Layout (Container)**
- Definiert den Layout-Rahmen
- Dient als Parent für alle Editorial Items

**Editorial Item (Einzelblock)**
- Nur innerhalb des Containers verfügbar (Parent-Block) :contentReference[oaicite:0]{index=0}  
- Rendert Inhalt basierend auf Position (z. B. links / rechts) :contentReference[oaicite:1]{index=1}  

---

## Editor

![Screenshot des Layout-Blocks im Editor mit eingefügten Editorial Items. Inhalte können direkt innerhalb der Items gestaltet werden.](assets/editor-editorial-layout.png)

- Layout wird über den Container definiert
- Inhalte werden direkt in den Editorial Items erstellt (z. B. Text, Bilder, Blöcke)
- Position der Items steuerbar

---

## Frontend

![Beispielhafte Darstellung eines editorialen Layouts mit frei angeordneten Inhaltselementen.](assets/frontend-editorial-layout.png)

Die Darstellung erfolgt als flexibles Layout mit individuell positionierten Inhaltselementen. Struktur und Design werden über Styles im Theme gesteuert.

---

## Technische Hinweise

- Block-Registrierung erfolgt dynamisch über `block.json` im `src/blocks`-Verzeichnis :contentReference[oaicite:2]{index=2}  
- Zwei Blöcke:
  - `ud/editorial-layout` (Container) :contentReference[oaicite:3]{index=3}  
  - `ud/editorial-item` (Einzelelement, nur innerhalb des Containers) :contentReference[oaicite:4]{index=4}  
- Items besitzen ein Positions-Attribut zur Layoutsteuerung :contentReference[oaicite:5]{index=5}  
- Zentrale Logik über `helpers.php`, `render.php`, `enqueue.php` :contentReference[oaicite:6]{index=6}  

---

## Autor

[ulrich.digital gmbh](https://ulrich.digital)

## Lizenz

GPL v2 or later  
https://www.gnu.org/licenses/gpl-2.0.html