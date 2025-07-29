import React, { useState, useEffect } from "react";
import {
  Newspaper,
  Clock,
  TrendingUp,
  Heart,
  Brain,
  Shield,
  Apple,
  AlertTriangle,
  ExternalLink,
  BookOpen,
  Star,
  Filter,
  Search,
  ChevronRight,
  Tag,
  Calendar,
  User,
} from "lucide-react";

const HealthNews = ({
  context = "standalone",
  scannedIngredients = [],
  productCategory = "",
  userHealthGoals = [],
  onArticleClick,
}) => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Mock health news data with contextual relevance
  const mockArticles = [
    {
      id: "1",
      title: "WHO Updates Sugar Intake Guidelines: What You Need to Know",
      summary:
        "New research shows reducing sugar intake by just 10% can significantly improve heart health and reduce diabetes risk.",
      content:
        "The World Health Organization has released updated guidelines recommending adults limit sugar intake to less than 5% of daily calories...",
      category: "nutrition",
      tags: ["sugar", "diabetes", "heart-health", "WHO", "guidelines"],
      publishedAt: "2024-01-15T10:30:00Z",
      readTime: 4,
      source: "Health Today",
      imageUrl:
        "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400",
      relevanceScore: 9.2,
    },
    {
      id: "2",
      title: "Preservatives and Gut Health: Latest Research Findings",
      summary:
        "Scientists discover how common food preservatives may disrupt beneficial gut bacteria and impact digestive health.",
      content:
        "A comprehensive study involving 10,000 participants reveals concerning links between artificial preservatives and gut microbiome disruption...",
      category: "research",
      tags: ["preservatives", "gut-health", "microbiome", "digestive-health"],
      publishedAt: "2024-01-14T14:20:00Z",
      readTime: 6,
      source: "Medical Journal Weekly",
      imageUrl:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      relevanceScore: 8.7,
    },
    {
      id: "3",
      title:
        "Organic vs. Conventional: New Study Reveals Nutritional Differences",
      summary:
        "Comprehensive analysis shows organic foods contain 20-40% higher levels of antioxidants compared to conventional alternatives.",
      content:
        "The largest meta-analysis to date examining organic versus conventional foods has revealed significant nutritional differences...",
      category: "organic",
      tags: ["organic", "antioxidants", "nutrition", "conventional-farming"],
      publishedAt: "2024-01-13T09:15:00Z",
      readTime: 5,
      source: "Nutrition Science Today",
      imageUrl:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      relevanceScore: 8.1,
      isSponsored: true,
      affiliateLink: "https://example.com/organic-products",
    },
    {
      id: "4",
      title: "Sodium Reduction: Small Changes, Big Health Impact",
      summary:
        "Reducing sodium intake by just 1000mg daily can lower blood pressure and reduce heart disease risk by 15%.",
      content:
        "New cardiovascular research demonstrates that modest reductions in daily sodium consumption can have profound health benefits...",
      category: "heart-health",
      tags: ["sodium", "blood-pressure", "heart-disease", "cardiovascular"],
      publishedAt: "2024-01-12T16:45:00Z",
      readTime: 3,
      source: "Cardiology News",
      imageUrl:
        "https://images.pexels.com/photos/6182527/pexels-photo-6182527.jpeg?auto=compress&cs=tinysrgb&w=400",
      relevanceScore: 7.9,
    },
    {
      id: "5",
      title: "Protein Quality: Complete vs. Incomplete Proteins Explained",
      summary:
        "Understanding amino acid profiles can help you make better protein choices for muscle health and recovery.",
      content:
        "Nutritionists break down the science behind protein quality and how to combine foods for optimal amino acid intake...",
      category: "fitness",
      tags: ["protein", "amino-acids", "muscle-health", "fitness", "recovery"],
      publishedAt: "2024-01-11T11:30:00Z",
      readTime: 7,
      source: "Fitness & Nutrition",
      imageUrl:
        "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400",
      relevanceScore: 7.5,
    },
    {
      id: "6",
      title: "Artificial Sweeteners: Benefits and Potential Risks",
      summary:
        "Latest research examines the safety profile of popular artificial sweeteners and their impact on metabolism.",
      content:
        "A balanced look at current evidence surrounding artificial sweeteners, including aspartame, sucralose, and stevia...",
      category: "ingredients",
      tags: [
        "artificial-sweeteners",
        "aspartame",
        "sucralose",
        "stevia",
        "metabolism",
      ],
      publishedAt: "2024-01-10T13:20:00Z",
      readTime: 5,
      source: "Food Science Review",
      imageUrl:
        "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=400",
      relevanceScore: 7.2,
    },
  ];

  const categories = [
    { id: "all", name: "All News", icon: Newspaper },
    { id: "nutrition", name: "Nutrition", icon: Apple },
    { id: "research", name: "Research", icon: Brain },
    { id: "heart-health", name: "Heart Health", icon: Heart },
    { id: "organic", name: "Organic", icon: Shield },
    { id: "fitness", name: "Fitness", icon: TrendingUp },
    { id: "ingredients", name: "Ingredients", icon: AlertTriangle },
  ];

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    setTimeout(() => {
      setArticles(mockArticles);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = articles;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (article) => article.category === selectedCategory
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    // Contextual filtering based on scanned ingredients
    if (context === "scan-result" && scannedIngredients.length > 0) {
      filtered = filtered
        .filter((article) =>
          article.tags.some((tag) =>
            scannedIngredients.some(
              (ingredient) =>
                tag.toLowerCase().includes(ingredient.toLowerCase()) ||
                ingredient.toLowerCase().includes(tag.toLowerCase())
            )
          )
        )
        .sort((a, b) => b.relevanceScore - a.relevanceScore);
    }

    setFilteredArticles(filtered);
  }, [articles, selectedCategory, searchTerm, scannedIngredients, context]);

  const getContextualTitle = () => {
    if (context === "scan-result") {
      return "Related Health News";
    }
    return "Latest Health News";
  };

  const getContextualSubtitle = () => {
    if (context === "scan-result") {
      return "Based on your scanned product ingredients";
    }
    return "Stay informed with the latest health and nutrition insights";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  };

  const handleArticleClick = (articleId) => {
    if (onArticleClick) {
      onArticleClick(articleId);
    }
  };

  if (isLoading) {
    return (
      <div className="py-12">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-200 h-64 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section
      className={`${
        context === "scan-result" ? "py-8" : "py-20"
      } bg-gradient-to-br from-gray-50 to-white`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-emerald-500 to-sky-500 p-3 rounded-2xl">
              <Newspaper className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2
            className={`${
              context === "scan-result" ? "text-2xl" : "text-4xl"
            } font-bold text-gray-900 mb-4`}
          >
            {getContextualTitle()}
          </h2>
          <p
            className={`${
              context === "scan-result" ? "text-lg" : "text-xl"
            } text-gray-600 max-w-3xl mx-auto`}
          >
            {getContextualSubtitle()}
          </p>
        </div>

        {/* Filters and Search (only for standalone view) */}
        {context === "standalone" && (
          <div className="mb-12">
            {/* Search */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search health news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-emerald-500 to-sky-500 text-white shadow-lg"
                      : "bg-white text-gray-600 border border-gray-300 hover:border-emerald-300 hover:text-emerald-600"
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Contextual Ingredients Tags (for scan-result context) */}
        {context === "scan-result" && scannedIngredients.length > 0 && (
          <div className="mb-8 text-center">
            <p className="text-sm text-gray-600 mb-3">
              News related to ingredients in your product:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {scannedIngredients.slice(0, 5).map((ingredient, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
                >
                  <Tag className="w-3 h-3 inline mr-1" />
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div
          className={`grid ${
            context === "scan-result"
              ? "md:grid-cols-2"
              : "md:grid-cols-2 lg:grid-cols-3"
          } gap-8`}
        >
          {filteredArticles
            .slice(0, context === "scan-result" ? 4 : 9)
            .map((article, index) => (
              <article
                key={article.id}
                onClick={() => handleArticleClick(article.id)}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2 group cursor-pointer"
              >
                {/* Article Image */}
                <div className="relative">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Sponsored Badge */}
                  {article.isSponsored && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Sponsored
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 capitalize">
                    {article.category}
                  </div>

                  {/* Relevance Score (for scan-result context) */}
                  {context === "scan-result" && (
                    <div className="absolute bottom-3 right-3 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      {article.relevanceScore}/10
                    </div>
                  )}
                </div>

                {/* Article Content */}
                <div className="p-6">
                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(article.publishedAt)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime} min read</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                    {article.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{article.source}</span>
                    </div>

                    <button className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm group-hover:translate-x-1 transition-transform">
                      <span>Read More</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Affiliate Link (for sponsored content) */}
                  {article.affiliateLink && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <a
                        href={article.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-300"
                      >
                        <span>Shop Related Products</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              </article>
            ))}
        </div>

        {/* Load More Button (for standalone view) */}
        {context === "standalone" && filteredArticles.length > 9 && (
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-emerald-500 to-sky-500 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-600 hover:to-sky-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              Load More Articles
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredArticles.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Articles Found
            </h3>
            <p className="text-gray-600">
              {searchTerm || selectedCategory !== "all"
                ? "Try adjusting your search or filter criteria."
                : "Check back later for new health news and insights."}
            </p>
          </div>
        )}

        {/* Newsletter Signup (for standalone view) */}
        {context === "standalone" && (
          <div className="mt-20 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with Health News
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Get the latest health insights and nutrition news delivered to
              your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HealthNews;
