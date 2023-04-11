export const INITIAL_LAYOUT = [
    { w: 5, h: 3, x: 0, y: 0, i: "initial_1", moved: false, static: false },
    { w: 5, h: 3, x: 0, y: 9, i: "initial_2", moved: false, static: false },
    { w: 5, h: 3, x: 0, y: 3, i: "initial_3", moved: false, static: false },
    { w: 14, h: 17, x: 10, y: 0, i: "initial_5", moved: false, static: false },
    { w: 5, h: 8, x: 5, y: 14, i: "initial_8", moved: false, static: false },
    { w: 5, h: 8, x: 0, y: 15, i: "initial_9", moved: false, static: false },
    {
        w: 5,
        h: 3,
        x: 0,
        y: 12,
        i: "d8150693-9109-4f3d-bf50-2274c10947ac",
        moved: false,
        static: false,
    },
    {
        w: 5,
        h: 3,
        x: 5,
        y: 2,
        i: "3277b62d-1618-4c3d-9d4b-e9e495315916",
        moved: false,
        static: false,
    },
    {
        w: 5,
        h: 3,
        x: 5,
        y: 5,
        i: "fed4dbe4-f4a3-40d1-81eb-1ec07647a11e",
        moved: false,
        static: false,
    },
    {
        w: 5,
        h: 3,
        x: 5,
        y: 8,
        i: "dab52a34-e55e-481e-bb40-b5ac06cf48d1",
        moved: false,
        static: false,
    },
    {
        w: 5,
        h: 3,
        x: 5,
        y: 11,
        i: "e0324702-274e-43d3-b365-2dee047111f7",
        moved: false,
        static: false,
    },
    {
        w: 5,
        h: 7,
        x: 0,
        y: 23,
        i: "2da9457f-0cbb-44d0-811b-edc45aee4ee8",
        moved: false,
        static: false,
    },
    {
        w: 6,
        h: 10,
        x: 10,
        y: 17,
        i: "5ccf2ffb-4803-4d79-8700-8ff3eb973f7c",
        moved: false,
        static: false,
    },
    {
        w: 5,
        h: 3,
        x: 0,
        y: 6,
        i: "43820793-0467-47c0-bab8-5de92b487802",
        moved: false,
        static: false,
    },
    {
        w: 5,
        h: 10,
        x: 5,
        y: 22,
        i: "d6ac5674-44eb-4e9f-b9a1-a50695cf85e2",
        moved: false,
        static: false,
    },
    {
        w: 4,
        h: 3,
        x: 10,
        y: 27,
        i: "64c24a3b-dc5d-48d3-a446-79cbf1e55242",
        moved: false,
        static: false,
    },
    {
        w: 10,
        h: 9,
        x: 14,
        y: 27,
        i: "b37ea2c2-b14b-4e58-8c9a-3c5da60074aa",
        moved: false,
        static: false,
    },
    {
        w: 8,
        h: 10,
        x: 16,
        y: 17,
        i: "8269024e-7125-4438-ba0a-630a8825823c",
        moved: false,
        static: false,
    },
    {
        w: 5,
        h: 2,
        x: 5,
        y: 0,
        i: "8ba39673-f170-4e9f-92dc-1e7d51cc2213",
        moved: false,
        static: false,
    },
];

export const INITIAL_WIDGETS = [
    { i: "initial_1", type: "TickerTapeWidget" },
    { i: "initial_2", type: "TickerWidget", symbol: "CAPITALCOM:DXY" },
    { i: "initial_3", type: "TickerWidget", symbol: "USDTRY" },
    { i: "initial_5", type: "ChartBoxWidget", symbol: "BTCUSDT" },
    { i: "initial_8", type: "NewsWidget", symbol: "BTCUSDT" },
    { i: "initial_9", type: "FearGreedWidget" },
    {
        i: "d8150693-9109-4f3d-bf50-2274c10947ac",
        type: "TickerWidget",
        symbol: "VIX",
    },
    {
        i: "3277b62d-1618-4c3d-9d4b-e9e495315916",
        type: "TickerWidget",
        symbol: "ethUSDT",
    },
    {
        i: "fed4dbe4-f4a3-40d1-81eb-1ec07647a11e",
        type: "TickerWidget",
        symbol: "BTCUSDT",
    },
    {
        i: "dab52a34-e55e-481e-bb40-b5ac06cf48d1",
        type: "TickerWidget",
        symbol: "BTC.D",
    },
    {
        i: "e0324702-274e-43d3-b365-2dee047111f7",
        type: "TickerWidget",
        symbol: "TOTAL",
    },
    {
        i: "2da9457f-0cbb-44d0-811b-edc45aee4ee8",
        type: "NoteWidget",
        symbol: "BTCUSDT",
        content: "My awesome notes..",
        title: "My Notes",
    },
    {
        i: "5ccf2ffb-4803-4d79-8700-8ff3eb973f7c",
        type: "PodcastsWidget",
        symbol: "BTCUSDT",
    },
    {
        i: "43820793-0467-47c0-bab8-5de92b487802",
        type: "TickerWidget",
        symbol: "EURTRY",
    },
    {
        i: "d6ac5674-44eb-4e9f-b9a1-a50695cf85e2",
        type: "TechnicalAnalysisWidget",
        symbol: "BTCUSDT",
    },
    {
        i: "64c24a3b-dc5d-48d3-a446-79cbf1e55242",
        type: "TickerWidget",
        symbol: "CFXUSDT",
    },
    {
        i: "b37ea2c2-b14b-4e58-8c9a-3c5da60074aa",
        type: "ChartBoxWidget",
        symbol: "CFXUSDT",
    },
    {
        i: "8269024e-7125-4438-ba0a-630a8825823c",
        type: "TVBox",
        symbol: "BTCUSDT",
        channel: "Bloomberg",
    },
    {
        i: "8ba39673-f170-4e9f-92dc-1e7d51cc2213",
        type: "BTCHalvingWidget",
        symbol: "BTCUSDT",
    },
];
