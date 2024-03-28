/**
 * Whitelist Address Exporter
 *
 * This script connects to your Supabase database and exports a whitelist of user addresses
 * from the "whitelist" table to a JSON file named "winners.json".
 *
 * Usage:
 * 1. Add the supabaseUrl with your actual Supabase URL.
 * 2. Add the supabaseAnonKey with your actual Supabase anonymous key.
 * 3. Replace winnersAmount with the number of winners you want to export.
 *
 * Instructions:
 * 1. Run the script using the following command:
 *    ```
 *    npm run whitelist
 *    ```
 * 2. The script will connect to your Supabase database, fetch all addresses, randomly select winners,
 *    and export them to "winners.json" in the same directory.
 * 3. You can now use the generated "winners.json" file with the list of addresses.
 */

const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");

const supabaseUrl = "https://mweawcsgjjpesnagfbqp.supabase.co";          // Add your Supabase URL
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13ZWF3Y3NnampwZXNuYWdmYnFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MzI2MDUsImV4cCI6MjAyNDIwODYwNX0.QKNK27P9bQnODxGx4eDiwjf8kTGOjV30z2ECRaQNc4s";      // Add your Supabase anonymous key
const winnersAmount = 100;         // Number of winners to export

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase URL or anonymous key is missing. Please provide valid values.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const exportWinnersAddresses = async () => {
  try {
    const { data, error } = await supabase
      .from("whitelist")
      .select("useraddress");

    if (error) {
      console.error(error);
      return;
    }

    const shuffledData = data.sort(() => Math.random() - 0.5);

    const winners = shuffledData.slice(0, winnersAmount).map((entry) => entry.useraddress).filter(Boolean);

    const jsonContent = JSON.stringify(winners, null, 2);

    fs.writeFileSync("winners.json", jsonContent);
    console.log(`Random winners' addresses exported to winners.json successfully!`);
  } catch (error) {
    console.error(error);
  }
};

exportWinnersAddresses();