# 💰 Expense Tracker & Visualization Application

A modern, feature-rich web application built with **React 18** and **Vite** to help you track your expenses, visualize spending patterns, and manage your finances efficiently.

## ✨ Features

### 📝 Expense Management
- **Add Expenses**: Quickly add new expenses with amount, category, description, and date
- **Edit & Delete**: Modify or remove existing expense records
- **Local Storage**: All data is saved to browser localStorage for persistence

### 📊 Visualizations
- **Pie Chart**: See expense distribution across different categories
- **Bar Chart**: Track daily spending over the last 7 days
- **Interactive Charts**: Hover over chart elements for detailed information

### 🎯 Analytics & Statistics
- **Total Expenses**: Sum of all expenses
- **Average Expense**: Mean spending amount
- **Highest Expense**: Maximum single transaction
- **Top Category**: Category with most spending

### 🔍 Filters & Controls
- **Category Filter**: Filter expenses by Food, Transport, Entertainment, Shopping, Bills, Health, Education, or Other
- **Time Range Filter**: View All Time, Today, Last 7 Days, or Last 30 Days
- **Real-time Updates**: Filters update instantly as you modify data

### 🎨 User Interface
- **Modern Design**: Gradient backgrounds, smooth animations, and modern styling
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Dynamic Animations**: Smooth transitions and interactive elements
- **Emoji Integration**: Visual category indicators with emojis

## 🚀 Getting Started

### Prerequisites
- Node.js 14+ and npm installed
- A modern web browser

### Installation

1. Navigate to the project directory:
```bash
cd "c:\Users\A.Vivek\OneDrive\Desktop\FEDF PROJECT"
```

2. Install dependencies (if not already done):
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will automatically open in your browser at `http://localhost:5173`

### Building for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
FEDF PROJECT/
├── index.html                 # Main HTML file
├── package.json              # Project dependencies
├── vite.config.js            # Vite configuration
├── .gitignore                # Git ignore rules
├── .github/
│   └── copilot-instructions.md
├── src/
│   ├── main.jsx              # React entry point
│   ├── App.jsx               # Main app component
│   ├── App.css               # App styles
│   ├── index.css             # Global styles
│   ├── components/
│   │   ├── Dashboard.jsx     # Main dashboard
│   │   ├── Dashboard.css
│   │   ├── ExpenseForm.jsx   # Add expense form
│   │   ├── ExpenseForm.css
│   │   ├── ExpenseList.jsx   # Transaction list
│   │   ├── ExpenseList.css
│   │   ├── ExpenseChart.jsx  # Chart container
│   │   ├── ExpenseChart.css
│   │   ├── PieChart.jsx      # Pie chart component
│   │   ├── PieChart.css
│   │   ├── BarChart.jsx      # Bar chart component
│   │   ├── BarChart.css
│   │   ├── ExpenseStats.jsx  # Statistics display
│   │   ├── ExpenseStats.css
│   │   ├── CategoryFilter.jsx # Category buttons
│   │   └── CategoryFilter.css
│   └── utils/                # Utility functions (future)
└── node_modules/             # Dependencies
```

## 💡 How to Use

1. **Add an Expense**:
   - Enter the amount spent
   - Select a category
   - Add a description
   - Choose the date
   - Click "Add Expense"

2. **View Statistics**:
   - See total, average, highest, and top category stats instantly
   - Stats update based on selected filters

3. **Analyze Charts**:
   - Pie chart shows spending by category
   - Bar chart displays daily expenses for the last week
   - Hover over chart elements to see exact amounts

4. **Filter Data**:
   - Use category buttons to filter by type
   - Use time range dropdown to view specific periods
   - Both filters work together

5. **Manage Records**:
   - Edit any expense by clicking the edit icon
   - Delete expenses with the delete icon
   - Changes are saved automatically

## 🎨 Design Features

- **Color Scheme**:
  - Primary Purple: `#6366f1`
  - Secondary Purple: `#8b5cf6`
  - Accent Colors: Green, Blue, Orange, Red
  
- **Animations**:
  - Smooth fade-in effects on page load
  - Hover animations on interactive elements
  - Bounce animation on header icon
  - Shake animation for error messages

- **Responsive Breakpoints**:
  - Desktop: Full layout with multi-column grids
  - Tablet: Adapted grid layouts
  - Mobile: Single column, touch-friendly buttons

## 🔒 Data Privacy

- All data is stored locally in your browser
- No data is sent to external servers
- Clear your browser storage to delete all data

## 🛠️ Technologies Used

- **React 18.2.0**: UI library
- **Vite 5.0.8**: Build tool and dev server
- **CSS3**: Modern styling with Grid, Flexbox, and Animations
- **JavaScript ES6+**: Modern JavaScript features

## 📱 Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🐛 Known Issues

- None currently

## 📝 Future Enhancements

- Export data to CSV/PDF
- Budget setting and alerts
- Recurring expenses
- Multi-year reports
- Dark mode toggle
- Data backup and sync
- Mobile app version

## 📄 License

This project is open source and available for personal use.

## 👨‍💻 Development Notes

- Uses React Hooks for state management
- Components are modular and reusable
- CSS is organized by component
- LocalStorage handles data persistence
- Charts are built with SVG for scalability

---

**Start tracking your expenses today! 💸**

For more information or to report issues, please refer to the project documentation.
