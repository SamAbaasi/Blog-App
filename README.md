# Nextjs Blog Application like overreact

Welcome to the Next.js Blog Application! This repository contains the source code for a versatile blog application built with Next.js, React, and various other technologies. Whether you're looking to set up the project locally or explore its architecture, this README provides a detailed guide to get you started.

## Demo

**Live Demo**: [View Live Demo](https://overreactedblog.netlify.app/)

## Getting Started

To begin using this Nextjs Blog application, follow these simple steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/SamanAbasi/blog
    cd blog


2. Install the dependencies:

   ```bash
    npm install


3. Start the development server:

   ```bash
    npm run dev


## Technologies Used

This Nextjs Blog application leverages various technologies and libraries to deliver a powerful and responsive user experience. Here's a list of the key technologies used:

- Next.js: A React framework for building server-rendered applications 
- React-Query: A library for managing, caching, and synchronizing asynchronous data.
- Axios: A library for making HTTP requests.
- TypeScript: A superset of JavaScript that adds static typing.
- react-loading-skeleton: A library for creating loading skeletons to enhance UI during data fetching.
- sass: A popular CSS extension language.
- react-icons: A library providing a set of high-quality React icons.

## Features
This Nextjs Blog application comes packed with features that make it a powerful tool for managing and visualizing data. Here's a glimpse of some of the key features:
- **[React Query and Hydration](#react-query-and-hydration)**
- **[Theme Switching](#theme-switching)**
- **[Custom Hooks](#custom-hooks)**

## Folder Structure

The project structure is organized as follows:

blog/
 ```
├── src/
│ ├── API/ # Contains API functions
│ ├── components/ # Reusable components
│ ├── Hooks/ # Reusable hooks such as useAPI
│ ├── layout/ # Layout for diffrent routes
│ ├── lib/ # Utility functions and constants
│ ├── tools/ #  Utility functions
│ ├── context/ # contain provider for theme switching
│ ├── types/ # TypeScript type declarations
│ ├── Pages # pages
│ └── ... # Other files and folders
├── public/: # Includes public assets and static files.
├── package.json and package-lock.json: Define project dependencies and versions.
└── README.md # You're currently reading it! This README provides detailed information about the project's structure, features, and usage.
```

## React Query and Hydration

Harness the power of React Query for efficient data fetching and seamless hydration in Next.js Blog Application.

### React Query Integration

- The application utilizes [React Query](https://react-query.tanstack.com/) to manage and fetch data effortlessly.
  
  - **Configuration:**
    - The React Query client is configured in `pages/_app.tsx` with custom options for queries.

    ```typescript
    import { QueryClient, QueryClientProvider } from "react-query";
    import { Hydrate } from "react-query/hydration";
    import { config as reactQueryConfig } from '@/lib/react-query-config';
    
    // ...
    
    const [queryClient] = useState(() => new QueryClient(reactQueryConfig));

    // ...
    
    <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
            {/* Your components */}
        </Hydrate>
    </QueryClientProvider>
    ```

  - **Query Hooks:**
    - Custom hooks like `useArticle` and `useArticleList` (found in `api/articles.ts`) demonstrate the seamless integration of React Query for fetching article data.

    ```typescript
    import { useQuery } from 'react-query';
    import * as api from '@/API/articles';
    import { ArticleType } from '@/Types/Articles';

    export function useArticle(id: string | string[] | undefined) {
      return useQuery<ArticleType>(['article', id], () => api.getArticle(id));
    }

    export function useArticleList(page: number) {
      return useQuery<ArticleType[]>(['articleList'], () =>
        api.getArticles()
      );
    }
    ```

### Hydration

- Next.js's built-in hydration mechanism ensures a fast and efficient loading experience for your application.

  - **Hydrate Component:**
    - The `Hydrate` component from React Query helps rehydrate the client with the server state, minimizing unnecessary data refetching.

    ```typescript
    import { Hydrate } from "react-query/hydration";

    // ...

    <Hydrate state={pageProps.dehydratedState}>
        {/* Your components */}
    </Hydrate>
    ```

  - **Optimizations:**
    - Configuration options, such as `staleTime` and `cacheTime` in the React Query setup, optimize the data fetching strategy to provide a smoother user experience.

For more details on React Query and hydration, refer to the official documentation: [React Query Documentation](https://react-query.tanstack.com/).


## Theme Switching

The Next.js Blog Application provides a customizable theme switching feature, allowing users to toggle between light and dark themes based on their preferences.

### How to Use

1. **Default Theme:**
   - By default, the application is set to the light theme.

2. **Toggle Theme:**
   - To toggle between light and dark themes, locate the theme switcher in the application UI. This switcher might be present in the header, settings, or any other accessible location.

3. **Persisting Theme Preferences:**
   - The application utilizes browser local storage to persist your theme preferences. When you switch to a different theme, your choice will be remembered even if you close and reopen the application.

### Implementing Theme Switching in Code

If you wish to integrate theme switching into your own components, follow these steps:

1. **Theme Context:**
   - The theme context is defined in `ThemeContext.tsx`. It includes a `ThemeProvider` component that wraps your application with a context provider, allowing components to access and modify the current theme.

2. **ThemeProvider Usage:**
   - Wrap your components with the `ThemeProvider` to enable access to the theme context.

```javascript
   import { ThemeProvider } from '@/context/ThemeContext';

   function App() {
     return (
       <ThemeProvider>
         {/* Your application components */}
       </ThemeProvider>
     );
 }
```
1. **ClientThemeWrapper:**

The ClientThemeWrapper component, found in `ClientThemeWrapper.tsx`, uses the theme context to apply different styles based on the selected theme. It reads the current theme from the context and applies appropriate CSS classes.

2. **Layout Component:**

```javascript
import ClientThemeWrapper from '@/context/ClientThemeWrapper';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ClientThemeWrapper>
            <div className={styles.layout}>
              {/* Your layout components */}
            </div>
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
```
Finally, in your layout component (e.g., `Layout.tsx`), include the ClientThemeWrapper component to ensure that the theme styles are applied to the entire application.

## Custom Hooks

Supercharge your Next.js Blog Application with custom hooks designed for specific functionalities.

### `useArticle`

```javascript
import * as api from '@/API/articles';
import { ArticleType } from '@/Types/Articles';
import { useQuery } from 'react-query';

export function useArticle(id: string | string[] | undefined) {
  return useQuery<ArticleType>(['article', id], () => api.getArticle(id));
}
```
- Description:

Fetches data for a specific article using the provided id.

### `useArticleList`
```javascript
import * as api from '@/API/articles';
import { ArticleType } from '@/Types/Articles';
import { useQuery } from 'react-query';

export function useArticleList(page: number) {
  return useQuery<ArticleType[]>(['articleList'], () =>
    api.getArticles()
  );
}
```
- Description:

Fetches a list of articles, useful for paginated displays.

### `useGithubUserData`
```javascript
import { useQuery } from 'react-query';
import * as githubApi from '@/API/gitHubApi';
import GithubUserData from '@/Types/GitHub';

export function useGithubUserData(username: string) {
  return useQuery<GithubUserData>(['githubUserData', username], () => githubApi.fetchGithubUserData(username));
}
```
- Description:

 Retrieves GitHub user data based on the provided `username`.

These custom hooks utilize React Query to seamlessly handle data fetching, providing enhanced functionalities for articles and GitHub-related features in your application.
## Contribution
If you'd like to contribute to the development of this Next.js Blog application, please follow the guidelines in the CONTRIBUTING.md file.
