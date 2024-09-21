# gmon.link
![gmon.link introduction banner](/public/assets/gmon-introduction.png)
A linktree/linkinbio alternative that is powered by Telegram. It is written in Next.js, PostgresSQL database from Supabase, UI made with TailwindCSS, ShadCN UI & Radix UI

# Setting it up locally
To setup the front-end of gmon.link locally to for example; help contribute to the platform or play around with it. You need to follow the following steps:

## 1. Setting up the Database
Head over to [Supabase](https://supabase.com/) and create a new account/project, call this project `gmonlink`.

Go to the `Table Editor` section to create the following tables:

### 1.1. Analytics (analytics)
This table is used to store the analytics for each link. It contains the following columns:
- id: int8 (primary key, is identity)
- slug: text
- type: text
- created_at: timestampz (default to `now()`)

### 1.2. Users (users)
This table is used to store the users that have created an account via the @gmonlinkbot on Telegram. It contains the following columns:
- id: int8 (primary key, is identity)
- user_id: int8
- username: text
- created_at: timestampz (default to `now()`)

### 1.3. Projects (projects)
This table is used to store the projects that users have created. It contains the following columns:
- project_id: int8 (primary key, is identity)
- user_id: int8 (foreign key to `users.id`)
- title: text
- slug: text (is unique)
- theme: text (default to `violet`)
- is_verified: boolean (default to `false`)
- avatar_url: text
- description: text
- buttons: jsonb
- created_at: timestampz (default to `now()`)

### 1.4. Links (links)
This table is used to store the links that users have created. It contains the following columns:
- link_id: int8 (primary key, is identity)
- project_id: int8 (foreign key to `projects.project_id`)
- title: text
- url: text
- order: int8
- description: text
- category: text
- icon: text
- created_at: timestampz (default to `now()`)

### 1.5. Storing Images
This is not a table, but a bucket in the `Storage` section of your Supabase project. You can find it by clicking `Storage` in the sidebar.

Let's create a new bucket, call it `gmon.link` and make it a public bucket.

Files uploaded in this bucket will be accessible by users to view the images inside it, the `Project Slug` is the file name followed by the extension.
Example: `monad-pad.png` for the Monad Pad project logo, also called `avatar_url` in the projects table.

## 2. Setting up the front-end
Now that you've setup the database, you can start setting up the front-end.

Let's start by forking the repository, click `Fork` in the top right corner. A pop-up will appear, you can leave the default options there and just click `Create fork`. After a few seconds, you should be redirected to your own copy of the repository.

Open the forked repository in your favourite IDE, we recommend using [VSCode](https://code.visualstudio.com/) or [Cursor](https://cursor.com/).

### 2.1. Install dependencies
To install the dependencies, run the following command:
```bash
npm install
```

### 2.2. Setup environment variables
Rename the `.env.example` file to `.env.local`.

You will see the following environment variables:
```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_KEY=
JWT_SECRET=
NEXT_PUBLIC_ENVIRONMENT=
```

All these except the `NEXT_PUBLIC_ENVIRONMENT` can be found in the `Project Settings` -> `API` section of your Supabase project.

The `NEXT_PUBLIC_ENVIRONMENT` is used to determine the environment of the application, you can set it to `development` while locally developing, and `production` when you want to deploy the application. In `/lib/utils.ts` you can see exactly what this does.

### 2.3. Run the application
To run the application, run the following command:
```bash
npm run dev
```

You can now access the application at `http://localhost:3000`.

# Made by Monad Pad
![Monad Pad Banner](/public/assets/monadpad-image.png)
This micro tool is made by [Monad Pad](https://www.monadpad.xyz) - the leading launchpad on Monad.

This is not affiliated with Monad in any way.