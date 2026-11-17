# Open Day Stand

Профориентационный тест «Какое направление тебе больше подойдёт?» для дня открытых дверей кафедры ИСИЗИ (УТИИТ).

Статический стенд: 9 вопросов, скоринг по направлениям ПИ / ИС / БАС / БИ, радар и карточка результата (PNG). Без бэкенда и без аналитики — рассчитан на GitHub Pages.

## Локальный запуск

```bash
npm install
npm run dev
```

С воспроизводимой выборкой вопросов: `http://localhost:5173/#/?seed=1`

```bash
npm test
npm run build
npm run preview
```

## GitHub Pages

1. Создайте репозиторий и запушьте содержимое этой папки.
2. Settings → Pages → Source: **GitHub Actions**.
3. После push в `main`/`master` workflow соберёт сайт с `base=/<имя-репо>/`.

URL: `https://<user>.github.io/<repo>/`

Для корневого сайта пользователя (`username.github.io`) задайте в workflow:

```yaml
GITHUB_PAGES_BASE: /
```

## Структура

- `src/data/openDay/test.json` — пул вопросов и тексты результатов
- `src/helpers/openDayScoring.js` — выборка и подсчёт
- `src/views/OpenDay/` — UI (intro → quiz → result)
