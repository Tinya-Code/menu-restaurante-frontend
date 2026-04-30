/**
 * Interfaz genérica para las respuestas de la API (Backend API format).
 */
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  timestamp: string;
}

/**
 * Legacy interface for backward compatibility.
 * @deprecated Use ApiResponse instead
 */
export interface ApiResponseLegacy<T> {
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
