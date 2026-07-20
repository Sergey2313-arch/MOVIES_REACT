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

Без настроенного OMDb-ключа приложение автоматически запускается в рабочем разделе Music. Для раздела Movies нужно указать переменную окружения.

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
cp .env.example .env
npm start
```

В `.env` укажите собственный OMDb API-ключ:

```text
REACT_APP_OMDB_API_KEY=your_omdb_api_key
```

Реальный ключ нельзя коммитить в Git. Приложение откроется по адресу `http://localhost:3000`.

## GitHub Pages

Workflow публикации получает значение из GitHub Actions secret с именем `OMDB_API_KEY`. Если secret не задан, деплой всё равно собирается, но доступен только раздел Music.

## Production-сборка

```bash
npm run build
```

## Автор

**Sergey Korobkov**  
Junior Frontend / .NET Developer
