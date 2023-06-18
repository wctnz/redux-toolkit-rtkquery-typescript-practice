# React-Redux Toolkit-RTK query-Typescript практика + типизация Redux Toolkit, RTK query

## Стек   

- React  
- Redux Toolkit  
- RTK query  
- Typescript  

Приложение делает запрос на сервер. В первом случае с помощью Redux Toolkit, во втором случае с помощью RTK query. С помощью RTK query настроен API, который позволяет добавлять, обновлять и удалять объекты из списка. 

Разобраны концепции Redux Toolkit  

- configureStore, createSlice, dispatch, provider,createAsyncThunk

Асинхронные экшены создаютсся с помощью meddleware thunk, по умолчанию встроенного в Redux Toolkit  

Слайсы упрощают работу с кодом, автоматически создая для нас экшены и экшен-криейторы

В Redux Toolkit в редюсере можно изменять конкретное поле у состояния напрямую, в отличие от Redux, где состояние является иммутабельным и редюсеры это чистые функции. 

Разобраны особенности использования Redux Toolkit в React:  

- хук useDispatch
- хук useSelector

Разобраны концепции RTK query    

- createApi, fetchBaseQuery, методы query и mutation, автоматически сгенерированные хуки, которые генерируются на основании эндпоинтов которые мы описываем в createApi, refetch, pollingInterval

RTK query - дополнительный модуль Redux Toolkit. RTK query позволяет настроить API, который будет делать запрос по отределенному эндпоинту, с определенным методом и параметрами. RTK query автоматически сгенерирует хук, с помощью которого можно будет получать данные - тело ответа от сервера, возможные ошибки и индикацию загрузки. RTK query будет хешировать ответ сервера и своевременно обновлять, если это небоходимо. И если данные из ответа используются где то еще, запрос не будет дублироваться, а данные возьмутся из хеша. 

Для более удобной работы с Redux Toolkit, RTK query в приложении типизованы стейт, экшены,редюсеры (в слайле), кастомные хуки (useAppDispatch, useAppSelector), запросы на сервер (query параметры) и тело ответа от сервера

Функционал приложения: По запросу с сервера вовзращается список объектов. С помощью RTK query настроен API, который позволяет добавлять, обновлять и удалять объекты из списка. При клике на тело карточки, вызывается prompt, введенное значение будет использовано для обновления обекта.  

(приложение не развернуто)

![Иллюстрация к проекту](https://github.com/wctnz/redux-toolkit-rtkquery-typescript-practice/raw/master/public/img1.png)

