const baseUrl = process.env.REACT_APP_API_URL;

export const getApi = async <T>(url: string): Promise<T> => {
  const response = await fetch(`${baseUrl}/${url}`).catch(error => {
    throw new Error(error);
  });
  return await handleResponse(response);
};

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return (await response.json()) as T;
};
