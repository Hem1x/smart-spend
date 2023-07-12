import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'

const adviceSlice = createSlice({
    name: "advice",
    initialState: [
        {
            id: uuidv4(),
            title: "Зачем инвестировать и подходит ли это мне?",
            subTitle: "Статья говорит о том, что инвестиции могут приносить больше прибыли, чем банковские вклады, но также существует риск потерять все вложенные средства.",
            tag: "Инвестиции",
            p1: "На инвестициях действительно можно заработать больше, чем на банковских вкладах, но при этом есть вероятность все потерять. Проценты по депозитам известны заранее, и даже если у банка отзовут лицензию, государство вернет вкладчикам деньги — в пределах 1,4 млн рублей.",
            p2: "На бирже такой страховки нет, можно лишиться всего. Тем более что падения стоимости ценных бумаг происходят гораздо чаще, чем банкротства банков.",
            p3: "Поэтому, прежде чем выходить на биржу, надо подготовить финансовую подушку безопасности. Часть сбережений — не меньше 3–6 ваших месячных доходов — стоит оставить на депозите или накопительном счете в банке. И только когда запас на черный день сделан, а свободные деньги еще остались и вы готовы ими рискнуть, можно подумать об инвестициях.",
            p4: "Главное помнить, что прибыль — это не слепая удача, как в казино, а результат хорошо продуманных действий. Не игра, а работа.",
        },
        {
            id: uuidv4(),
            title: "Разумное потребление: тратим с умом",
            tag: "Финансовая грамотность",
            subTitle: "Разбираемся, какие расходы можно сократить, не превращаясь в болезненного скупердяя.",
            p1: "Чаще всего разумное потребление связывают с экологией и гуманным отношением к окружающей среде: не тратить попусту воду и электричество, не покупать пластиковые пакеты, сортировать мусор. Но разумное потребление — это бережное отношение к любым ресурсам, в том числе и к финансам.",
            p2: "Разумное потребление — один из главных современных трендов. В 2017 году Нобелевскую премию по экономике получил американец Ричард Талер за исследования в области поведенческой экономики. Это наука о том, как люди тратят деньги, что их заставляет копить или отдавать огромные суммы, почему кто-то сильнее, а кто-то слабее реагирует на маркетинговые уловки. Поведенческая экономика помогает людям научиться тратить деньги осознаннее и разумнее.",
            p3: "Центробанки многих стран тоже начали защищать людей от маркетинговых уловок финансовых организаций и лишних трат. Банк России, например, инициирует законы, которые помогут людям тщательнее контролировать свои расходы.",
            p4: "Главное, чтобы экономия была разумной и не превратилась в нездоровую скупость. Итак, на чем экономить не в ущерб качеству жизни?",
        },
    ],
    reducers: {}
})

export default adviceSlice.reducer