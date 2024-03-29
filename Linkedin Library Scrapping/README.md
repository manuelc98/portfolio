# LinkedIn Saved Items Scraper

This Python script allows you to scrape your saved items from LinkedIn and save them to a CSV file. The intended use is to facilitate access to your saved items, making it easier to filter and access the content compared to LinkedIn's interface, where items are often buried in infinite scrolls.
Once your CSV file is ready, upload it to #streamlit app and enjoy your content! 

## How to Use

1. **Clone the Repository**: Clone this repository to your local machine.

2. **Install Dependencies**: Ensure you have Python installed on your machine. Install the required Python packages by running:
    ```
    pip install -r requirements.txt
    ```

3. **Set Up Chromedriver**: Download the appropriate chromedriver executable for your system and specify its path in the script.

4. **Run the Script**: Execute the script from the command line, providing your LinkedIn username, password, and desired output path for the CSV file. For example:
    ```
    python scrape_linkedin.py --driver_path /path/to/chromedriver --username your_username --password your_password --output_path /path/to/output.csv
    ```

5. **Access Your Saved Items**: Once the script completes execution, you can find your saved items stored in the CSV file specified by the `output_path` argument.

## Access your Linkedin Libray

Go to and upload your CSV to enjoy your content in a seamless way.

## Contributions

If you encounter any issues, have suggestions for improvements, or want to add new features, feel free to reach out!
