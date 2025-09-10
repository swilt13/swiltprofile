from pybaseball import batting_stats
import pandas as pd

# Gather WAR for all players from 2002 to 2023, year by year
all_years = []

for year in range(2002, 2024):
    df = batting_stats(year)
    if 'WAR' in df.columns and 'Pos' in df.columns:
        df = df[['Name', 'WAR', 'Pos']].copy()
        df['Year'] = year
        # Drop rows where WAR or Pos is null
        df = df.dropna(subset=['WAR', 'Pos'])
        all_years.append(df)

# Combine all years into one DataFrame
war_data = pd.concat(all_years, ignore_index=True)
# Remove players with missing WAR
war_data = war_data.dropna(subset=['WAR'])
# Save to JSON for use in the web game
war_data.to_json('war_by_player_year.json', orient='records')
