# COM4RT Portal

Last Edited: 4 April 2022

Contributors:

| Name                                         | Role                                                                                                                                              |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Ibrahim Izdhan](https://github.com/Prof-Iz) | UI Design of dashboard and Real time graph View, Supabase Database configuration, Design of Serverless API Functions for Data logging with Vercel |
| [Low Wai Sing](https://github.com/ws05klee)  | UI Design of Login and Signup Page                                                                                                                |

Tags: `node` `sveltekit` `tailwind css` `supabase` 

Status: 🟣 **Fulfilled requirements for University Course, not fully complete though**

## What is this?

<img src="COM4RT/images_readme/b85ee74fffe90eb888219d6faf12804276d200e2.png" title="" alt="2022-05-05-05-52-54-image.png" data-align="center">

COM4RT portal was designed as a real-time dashboard to view the data sent by a temperature and monitoring device that a user will register with the portal. The portal was built using *Sveltekit* and is served initially from the server and is subsequently hydrated client side.  The UI is designed to be both accessible from a mobile or desktop browser.

| <img title="" src="COM4RT/images_readme/35eab69a9b2c5456cd56ea27b3a6a83c65d123dd.png" alt="" width="296" data-align="center"> | <img title="" src="COM4RT/images_readme/97de251d8646017067ca9038efcbc7c54ffe0907.png" alt="" width="292" data-align="center"> |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |

Authentication was handled with Supabase as well as storing registered devices and data sent from said devices. *Row level Security* policies were implemented to protect pages and API routed from unauthorized access.

<img src="COM4RT/images_readme/2eee6b165647383c7a46f1a8f904438f3ef92b62.png" title="" alt="2022-05-05-06-06-32-image.png" data-align="center">

The portal allows for registration of devices (buddies as they were called) and generates a numeric ID for the Device. This ID is tied to the user email address as well.

| <img src="file:///D:/Projects/Project_README/COM4RT/images_readme/2022-05-05-06-26-53-image.png" title="" alt="" data-align="center"> | <img src="file:///D:/Projects/Project_README/COM4RT/images_readme/2022-05-05-06-27-04-image.png" title="" alt="" data-align="center"> |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |

The graph was made with [Apex Charts]([GitHub - galkatz373/svelte-apexcharts: Svelte wrapper for ApexCharts](https://github.com/galkatz373/svelte-apexcharts)) and is therefore interactive.

<img src="file:///D:/Projects/Project_README/COM4RT/images_readme/84a6ea0d5c102fc795a061559cba8d39bb6fe6e8.png" title="" alt="2022-05-05-05-56-41-image.png" data-align="center">

## Tech Stack Used

| Front End          | Sveltekit, Tailwind CSS, Daisy UI |
| ------------------ | --------------------------------- |
| **Back End**       | **Node, Vercel**                  |
| **Authentication** | **Supabase**                      |
| **Database**       | **Supabase**                      |

## Current Issues

1. Auth has issues with cookie not properly being deleted from browser though logout was successful server side.

2. Protected pages check if a user (email) is present in the browser `local storage` rather than the session object provided by svelte leading to issues where users can access the site, though not interact, if they are idle for a long period, as cookie expires (access token)

3. Realtime is implemented as a API Request sent every 5 seconds to check if any datapoint has changed due to clash with RLS and Supabase Realtime. 

4. Currently the API that the device sends the readings to is not protected - as in it logs any request sent to the API - rather than validating before insertion.

## Future Plans

As the project was simply done as a proof of concept for an IoT based device and its dashboard, no follow up is currently planned for the device. Perhaps in the future the same portal may be built with **Nuxt 3** as Vue JS has better support for Supabase

---

### Socials

[LinkedIn](https://www.linkedin.com/in/ibrahimizdhanofficial/)
