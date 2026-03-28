/**
 * Interfaz genérica para las respuestas de la API.
 */
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
  success: boolean;
}

/**
 * Interfaz para errores de la API.
 */
export interface ApiError {
  code: string;
  message: string;
  details?: unknown;
}
