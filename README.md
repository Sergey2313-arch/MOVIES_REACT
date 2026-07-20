# Movies & Music Search — React

[![React CI](https://github.com/Sergey2313-arch/MOVIES_REACT/actions/workflows/react-ci.yml/badge.svg)](https://github.com/Sergey2313-arch/MOVIES_REACT/actions/workflows/react-ci.yml)

React-приложение для поиска фильмов и музыкальных исполнителей через внешние API.

**Демо:** https://sergey2313-arch.github.io/MOVIES_REACT

## Возможности

- поиск фильмов по названию через OMDb API;
- поиск музыкальных исполнителей через TheAudioDB API;
- переключение между разделами Movies и Music;
- карточки с изображениями и основной информацией;
- индикатор загрузки;
- обработка пустых результатов и сетевых ошибок;
- адаптивный интерфейс;
- production-сборка, проверяемая GitHub Actions.

## Что отображается

### Movies

- постер;
- название;
- год выпуска;
- тип результата.

### Music

- фотография исполнителя;
- имя;
- жанр;
- страна;
- год основания;
- краткое описание.

## Технологии

- React 18;
- JavaScript;
- CSS;
- Fetch API;
- OMDb API;
- TheAudioDB API;
- GitHub Actions;
- GitHub Pages.

## Локальный запуск

Требования: Node.js 20+ и npm.

```bash
git clone https://github.com/Sergey2313-arch/MOVIES_REACT.git
cd MOVIES_REACT
npm install
npm start
```

Приложение откроется по адресу `http://localhost:3000`.

## Production-сборка

```bash
npm run build
```

## Автор

**Sergey Korobkov**  
Junior Frontend / .NET Developer
