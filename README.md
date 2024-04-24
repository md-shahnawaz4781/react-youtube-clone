# YouTube Clone

This project is a YouTube clone built with React. It aims to replicate some of the core functionalities of YouTube, such as browsing videos by category, playing videos, and viewing video details.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse videos by category.
- Play videos and view details such as views, likes, and comments.
- Responsive design for seamless viewing on various devices.
- Real-time data fetched from the YouTube Data API.
- Navigation using React Router.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:


2. Navigate to the project directory:


3. Install dependencies:


4. Set up API key:

   - Get your YouTube Data API key from the [Google Cloud Console](https://console.developers.google.com/).
   - Replace `YOUR_API_KEY` in the `data.js` file with your API key.

5. Start the development server:


6. Open your browser and visit `http://localhost:3000` to view the app.

## Usage

- Upon launching the app, you'll see a sidebar with different video categories.
- Click on a category to browse videos within that category.
- Click on a video to play it. You can view details such as views, likes, and comments.
- You can also navigate directly to a video by using the video ID in the URL (`/video/:categoryId/:videoId`).

## API Integration

This project utilizes the YouTube Data API to fetch video data, channel data, and comments. The API key is required for authentication and can be obtained from the Google Cloud Console.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License  (LICENSE).
