# 1. Define the list of quality scores
scores = [85, 87, 90, 94, 88]

# 2. Calculate the average score
average_score = sum(scores) / len(scores)

# 3. Check if the average exceeds 95 and assign the status
if average_score > 95:
    status = "Meeting Expectations"
else:
    status = "Needs Improvement"

# 4. Display the formatted output
print(f"Calculated Average: {average_score:.2f} | Status: {status}")