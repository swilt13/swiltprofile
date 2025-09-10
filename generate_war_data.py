from pybaseball import bwar_bat
import pandas as pd

# Load fielding data
fielding = pd.read_csv('documents/Fielding.csv')

# Only keep relevant columns
fielding = fielding[['playerID', 'yearID', 'POS', 'G']]

# For each player/year, get the position with the most games played (primary position)
fielding_primary = fielding.sort_values('G', ascending=False).drop_duplicates(['playerID', 'yearID'])
fielding_primary = fielding_primary.rename(columns={'POS': 'Pos', 'yearID': 'Year', 'playerID': 'player_ID'})

# Gather WAR for all players from 2002 to 2023, year by year
all_years = []
for year in range(2002, 2024):
    df = bwar_bat(year)
    # Use name_common (player name), WAR, year_ID (year), player_ID
    df = df[['name_common', 'WAR', 'year_ID', 'player_ID']].copy()
    df = df.dropna(subset=['WAR'])
    all_years.append(df)

# Combine all years into one DataFrame
war_data = pd.concat(all_years, ignore_index=True)
war_data.rename(columns={'name_common': 'Name', 'year_ID': 'Year'}, inplace=True)

# Merge with fielding data to get primary position
merged = pd.merge(war_data, fielding_primary[['player_ID', 'Year', 'Pos']], on=['player_ID', 'Year'], how='left')

# Only include players from after 2002
merged = merged[merged['Year'] > 2002]
# Save to JSON for use in the web game
merged.to_json('war_by_player_year.json', orient='records')
