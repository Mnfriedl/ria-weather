# Introduction

This project was made as the coding assignment for Ria's interview process. There was an initial setup of the repo, which involved:
- Creating the base project using Vite + React + TS.
- Adding some basic libraries like:
  - TailwindCSS (my preferred way of doing css right now)
  - Tanstack Query
  - Axios
  - ShadCN setup

After the initial setup of the repo (you can check the first commit done to this repository to see what was done in this step), a 2hr timer was started. During these two hours, the development of the weather application took place. After the two hours were over, no further development was done, only modifications to this README file and the deployment of the project.

## How to run the project

Execute the commands:
- `yarn`
- `yarn dev`

## Further improvements

Because of the 2 hour deadline, there were multiple things that were not done, and could have been done. The main ones are:
- The next days card was not finished. The `DayCard` component that should've given proper styling to each day of the forecast was not used (and should've been), and the raw data was displayed directly without styling (I was running out of time, and I didn't want to leave the processed data as a console.log or something else).
- The "Reload" button is not styled in any manner.
- In the place where it says "Add here the search by city" should ne an autocomplete selector [like this one](https://ui.shadcn.com/docs/components/combobox), which let's you pick the city to look up, and sets the state. The data for the cities would come from the 20k cities json.
- A routing library could have been used, where each city would have been it's own route. For the scope of this project it was _overkill_ and didn't seem necesary, so I just kept it simple.
- I used metric as default for measurements, but the api supports both metric and imperial, so it would be nice to add a switch somewhere to change between metric and imperial.
- There is no error handling. Yet again, because of time constraints, I decided to forgo error handling, and just assumed that the API isn't going to fail. But adding some error handling (which is pretty easy with useQuery) would be ideal.

## Comments

- The free tier of the API had only 2 endpoints: current weather, and forecast for 5 days. The forecast for 5 days delivered the data with data points every 3 hours. That meant that I didn't have right out of the gate the maximum and minimum temperature for a day, nor the icon of the weather and the description. I used ChatGPT to process the data of each day into a single data point for each day. The file with code generated by GPT says so at the top.
- In the setup, I added the necessary things to use ShadCN's components, but in the end didn't use any of them. I probably shouldn't have made the setup for ShadCN as it added clutter to the app that in the end wasn't used. Despite this, I probably would've used it if I had used more time, as the autocomplete selector was definitely coming from ShadCN.
- Decided to keep the style relatively similar to the example. This was only to reduce the amount of thinking that had to be dedicated to making a different design.
- The main content has a max-width just because it was made as mobile-first, and when stretched it didn't look very good, and I didn't have time to make a different design for fullscreen.
- The time displayed in the next hours section is using the local time. I just realized (this was written after the 2 hours were over) that the time should be displayed in the city's local time, and not the user's local time. This is definintely an error and should be fixed.

## Deployment

You can find a deployment of the project [in this URL](https://mnfriedl-ria-weather-assignment.netlify.app/)
