from pybaseball import batting_stats
import matplotlib.pyplot as plt

# Get total MLB home runs by year (2000-2023)
years = list(range(2000, 2024))
total_hrs = []
for year in years:
	data = batting_stats(year)
	total_hrs.append(data['HR'].sum())

plt.figure(figsize=(12,6))
plt.bar(years, total_hrs, color='#0077B5', width=0.7)
plt.title('Total MLB Home Runs by Year (2000-2023)')
plt.xlabel('Year')
plt.ylabel('Total Home Runs')
plt.grid(axis='y', linestyle='--', alpha=0.5)
plt.tight_layout()
plt.savefig('images/pybaseball_total_hr_by_year.png')
plt.close()
