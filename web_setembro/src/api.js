import axios from "axios";

const api = axios.create({
  baseURL: "https://densweb.free.beeceptor.com", 
  });

  // Interceptor para adicionar token simulado
  api.interceptors.request.use((config) => {
    config.headers.Authorization = "Bearer token-simulado-123";
      console.log("➡️ Enviando requisição para:", config.url);
        return config;
        });

        api.interceptors.response.use(
          (response) => {
              console.log("✅ Resposta:", response.data);
                  return response;
                    },
                      (error) => {
                          console.error("❌ Erro:", error.response?.status, error.message);
                              return Promise.reject(error);
                                }
                                );

                                // GET produtos
                                export const getProducts = () => api.get("/products");

                                // POST adicionar ao carrinho
                                export const addToCart = (product) => api.post("/cart", product);
                                