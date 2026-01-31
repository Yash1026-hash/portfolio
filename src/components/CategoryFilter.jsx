export default function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
    return (
        <div className="category-filter">
            {categories.map((category) => (
                <button
                    key={category}
                    className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => onCategoryChange(category)}
                >
                    <span className="category-label">{category}</span>
                </button>
            ))}
        </div>
    );
}
