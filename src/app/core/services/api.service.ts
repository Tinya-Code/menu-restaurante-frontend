import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { API_CONSTANTS } from '../constants/api.constants';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly _http = inject(HttpClient);
  private readonly _baseUrl = API_CONSTANTS.BASE_URL;

  /**
   * Realiza una petición GET genérica.
   * @param endpoint El endpoint al que se hará la petición.
   * @param params Parámetros de consulta (opcional).
   */
  get<T>(endpoint: string, params?: HttpParams): Observable<ApiResponse<T>> {
    return this._http
      .get<ApiResponse<T>>(`${this._baseUrl}${endpoint}`, { params })
      .pipe(catchError(this.handleError));
  }

  /**
   * Realiza una petición POST genérica.
   * @param endpoint El endpoint al que se hará la petición.
   * @param body El cuerpo de la petición.
   */
  post<T>(endpoint: string, body: unknown): Observable<ApiResponse<T>> {
    return this._http
      .post<ApiResponse<T>>(`${this._baseUrl}${endpoint}`, body)
      .pipe(catchError(this.handleError));
  }

  /**
   * Realiza una petición PUT genérica.
   * @param endpoint El endpoint al que se hará la petición.
   * @param body El cuerpo de la petición.
   */
  put<T>(endpoint: string, body: unknown): Observable<ApiResponse<T>> {
    return this._http
      .put<ApiResponse<T>>(`${this._baseUrl}${endpoint}`, body)
      .pipe(catchError(this.handleError));
  }

  /**
   * Realiza una petición PATCH genérica.
   * @param endpoint El endpoint al que se hará la petición.
   * @param body El cuerpo de la petición.
   */
  patch<T>(endpoint: string, body: unknown): Observable<ApiResponse<T>> {
    return this._http
      .patch<ApiResponse<T>>(`${this._baseUrl}${endpoint}`, body)
      .pipe(catchError(this.handleError));
  }

  /**
   * Realiza una petición DELETE genérica.
   * @param endpoint El endpoint al que se hará la petición.
   */
  delete<T>(endpoint: string): Observable<ApiResponse<T>> {
    return this._http
      .delete<ApiResponse<T>>(`${this._baseUrl}${endpoint}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Maneja los errores de las peticiones HTTP.
   * @param error El error capturado.
   */
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ha ocurrido un error inesperado';

    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Código de error: ${error.status}, mensaje: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
