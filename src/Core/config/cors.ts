export const productionCors = [
    "",
]

export const developmentCors = [
    "http://localhost:4000",
];

export const CORS_CONFIG = {
    origin: process.env.NODE_ENV === 'production' ? productionCors : developmentCors,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: false,
}
