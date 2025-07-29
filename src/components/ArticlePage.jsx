import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Share2,
  Bookmark,
  Heart,
  MessageCircle,
  Eye,
  Tag,
  ExternalLink,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
  ThumbsUp,
  ThumbsDown,
  Star,
  TrendingUp,
} from "lucide-react";
import HealthNews from "./HealthNews";

const ArticlePage = ({ articleId, onBack }) => {
  const [article, setArticle] = (useState < Article) | (null > null);
  const [isLoading, setIsLoading] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  // Mock article database
  const articleDatabase = {
    1: {
      id: "1",
      title: "WHO Updates Sugar Intake Guidelines: What You Need to Know",
      summary:
        "New research shows reducing sugar intake by just 10% can significantly improve heart health and reduce diabetes risk.",
      content:
        "The World Health Organization has released updated guidelines recommending adults limit sugar intake to less than 5% of daily calories...",
      fullContent: `
        <div class="prose prose-lg max-w-none">
          <p class="lead">The World Health Organization (WHO) has released comprehensive updated guidelines on sugar intake, marking the most significant revision to nutritional recommendations in over a decade. These new guidelines are based on extensive research involving over 50,000 participants across 15 countries.</p>
          
          <h2>Key Changes in the New Guidelines</h2>
          <p>The most significant change is the reduction of recommended daily sugar intake from 10% to less than 5% of total daily calories. For an average adult consuming 2,000 calories per day, this translates to approximately 25 grams or 6 teaspoons of sugar.</p>
          
          <blockquote>
            <p>"This recommendation applies to all monosaccharides and disaccharides added to foods by the manufacturer, cook, or consumer, plus sugars naturally present in honey, syrups, fruit juices, and fruit concentrates." - WHO Nutrition Guidelines</p>
          </blockquote>
          
          <h2>The Science Behind the Change</h2>
          <p>Recent studies have shown alarming connections between excessive sugar consumption and various health conditions:</p>
          
          <ul>
            <li><strong>Cardiovascular Disease:</strong> High sugar intake increases risk of heart disease by 38%</li>
            <li><strong>Type 2 Diabetes:</strong> Each additional serving of sugary drinks increases diabetes risk by 26%</li>
            <li><strong>Obesity:</strong> Sugar-sweetened beverages are linked to weight gain and obesity in both children and adults</li>
            <li><strong>Dental Health:</strong> Reduced sugar intake can decrease dental caries by up to 50%</li>
          </ul>
          
          <h2>Hidden Sugars: The Real Challenge</h2>
          <p>One of the biggest challenges consumers face is identifying hidden sugars in processed foods. Sugar appears under many names on ingredient labels:</p>
          
          <div class="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
            <h3 class="text-amber-800 font-semibold mb-2">Common Sugar Aliases:</h3>
            <div class="grid grid-cols-2 gap-2 text-sm text-amber-700">
              <span>• High fructose corn syrup</span>
              <span>• Dextrose</span>
              <span>• Maltose</span>
              <span>• Sucrose</span>
              <span>• Agave nectar</span>
              <span>• Brown rice syrup</span>
              <span>• Coconut sugar</span>
              <span>• Maple syrup</span>
            </div>
          </div>
          
          <h2>Practical Implementation Tips</h2>
          <p>Implementing these guidelines doesn't mean eliminating all sweetness from your diet. Here are practical strategies:</p>
          
          <h3>1. Read Labels Carefully</h3>
          <p>Look for products with less than 5g of sugar per serving. Remember that 4 grams of sugar equals 1 teaspoon.</p>
          
          <h3>2. Choose Natural Alternatives</h3>
          <p>Opt for whole fruits instead of fruit juices, and use spices like cinnamon and vanilla to add sweetness without sugar.</p>
          
          <h3>3. Gradual Reduction</h3>
          <p>Reduce sugar intake gradually over 2-3 weeks to allow your taste buds to adjust. This makes the transition more sustainable.</p>
          
          <h2>Impact on Food Industry</h2>
          <p>These new guidelines are already influencing food manufacturers to reformulate products. Major brands are investing in sugar reduction technologies and alternative sweetening methods.</p>
          
          <h2>Global Health Implications</h2>
          <p>If widely adopted, these guidelines could prevent millions of cases of diabetes, heart disease, and obesity worldwide. The WHO estimates that proper implementation could reduce healthcare costs by $50 billion annually across developed nations.</p>
          
          <h2>Conclusion</h2>
          <p>The updated WHO sugar guidelines represent a crucial step toward improving global health. While the recommendations may seem strict, the scientific evidence overwhelmingly supports the benefits of reduced sugar consumption. By making informed choices and reading labels carefully, consumers can significantly improve their long-term health outcomes.</p>
          
          <div class="bg-emerald-50 border-l-4 border-emerald-400 p-4 my-6">
            <h3 class="text-emerald-800 font-semibold mb-2">Quick Action Steps:</h3>
            <ol class="text-emerald-700 space-y-1">
              <li>1. Calculate your current daily sugar intake</li>
              <li>2. Identify your main sources of added sugar</li>
              <li>3. Replace one sugary item per week with a healthier alternative</li>
              <li>4. Use apps like FX Health to scan products and track sugar content</li>
              <li>5. Consult with a healthcare provider for personalized advice</li>
            </ol>
          </div>
        </div>
      `,
      category: "nutrition",
      tags: ["sugar", "diabetes", "heart-health", "WHO", "guidelines"],
      publishedAt: "2024-01-15T10:30:00Z",
      readTime: 8,
      source: "Health Today",
      author: "Dr. Sarah Mitchell",
      imageUrl:
        "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800",
      relevanceScore: 9.2,
      views: 15420,
      likes: 892,
      shares: 156,
    },
    2: {
      id: "2",
      title: "Preservatives and Gut Health: Latest Research Findings",
      summary:
        "Scientists discover how common food preservatives may disrupt beneficial gut bacteria and impact digestive health.",
      content:
        "A comprehensive study involving 10,000 participants reveals concerning links between artificial preservatives and gut microbiome disruption...",
      fullContent: `
        <div class="prose prose-lg max-w-none">
          <p class="lead">A groundbreaking study published in the Journal of Gastroenterology has revealed significant connections between common food preservatives and gut microbiome disruption, raising important questions about the long-term health effects of processed foods.</p>
          
          <h2>The Study: Scope and Methodology</h2>
          <p>Researchers from Harvard Medical School and the University of California conducted a comprehensive 5-year study involving 10,000 participants across diverse demographics. The study tracked dietary habits, gut microbiome composition, and health outcomes to understand the impact of preservatives on digestive health.</p>
          
          <h2>Key Findings</h2>
          <p>The research identified several concerning patterns:</p>
          
          <h3>Microbiome Disruption</h3>
          <ul>
            <li>Participants consuming high levels of preservatives showed 40% less bacterial diversity</li>
            <li>Beneficial bacteria like Lactobacillus and Bifidobacterium were significantly reduced</li>
            <li>Harmful bacteria populations increased by an average of 25%</li>
          </ul>
          
          <h3>Health Implications</h3>
          <ul>
            <li>Increased inflammation markers in 60% of high-preservative consumers</li>
            <li>Higher rates of digestive issues, including IBS and bloating</li>
            <li>Compromised immune function in 35% of participants</li>
          </ul>
          
          <h2>Most Problematic Preservatives</h2>
          <p>The study identified specific preservatives with the most significant impact:</p>
          
          <div class="bg-red-50 border-l-4 border-red-400 p-4 my-6">
            <h3 class="text-red-800 font-semibold mb-2">High-Risk Preservatives:</h3>
            <div class="text-red-700 space-y-2">
              <p><strong>Sodium Benzoate (E211):</strong> Found in soft drinks and pickled foods</p>
              <p><strong>Potassium Sorbate (E202):</strong> Common in baked goods and dairy products</p>
              <p><strong>BHA/BHT (E320/E321):</strong> Used in cereals and snack foods</p>
              <p><strong>Sulfites (E220-E228):</strong> Present in dried fruits and wine</p>
            </div>
          </div>
          
          <h2>The Gut-Health Connection</h2>
          <p>The gut microbiome plays a crucial role in overall health, affecting everything from immune function to mental health. When preservatives disrupt this delicate ecosystem, the consequences can be far-reaching.</p>
          
          <blockquote>
            <p>"We're seeing clear evidence that certain preservatives can fundamentally alter the gut microbiome in ways that may have long-term health consequences." - Dr. Michael Chen, Lead Researcher</p>
          </blockquote>
          
          <h2>Protecting Your Gut Health</h2>
          <p>While completely avoiding preservatives may be challenging, there are practical steps you can take:</p>
          
          <h3>1. Choose Fresh Over Processed</h3>
          <p>Prioritize fresh, whole foods whenever possible. When buying packaged foods, look for those with minimal ingredients.</p>
          
          <h3>2. Read Labels Carefully</h3>
          <p>Learn to identify preservatives on ingredient lists. Apps like FX Health can help you quickly assess preservative content.</p>
          
          <h3>3. Support Your Microbiome</h3>
          <ul>
            <li>Consume probiotic-rich foods like yogurt, kefir, and fermented vegetables</li>
            <li>Eat prebiotic foods that feed beneficial bacteria</li>
            <li>Consider a high-quality probiotic supplement</li>
          </ul>
          
          <h2>Industry Response</h2>
          <p>Food manufacturers are beginning to respond to these findings by developing natural preservation methods and reducing reliance on synthetic preservatives.</p>
          
          <h2>Future Research</h2>
          <p>Scientists are now investigating whether the effects of preservatives on gut health are reversible and how long it takes for the microbiome to recover after reducing preservative intake.</p>
          
          <div class="bg-emerald-50 border-l-4 border-emerald-400 p-4 my-6">
            <h3 class="text-emerald-800 font-semibold mb-2">Action Plan for Better Gut Health:</h3>
            <ol class="text-emerald-700 space-y-1">
              <li>1. Audit your pantry for high-preservative foods</li>
              <li>2. Gradually replace processed items with fresh alternatives</li>
              <li>3. Incorporate fermented foods into your daily diet</li>
              <li>4. Monitor how you feel as you reduce preservative intake</li>
              <li>5. Consult with a healthcare provider about probiotic supplements</li>
            </ol>
          </div>
        </div>
      `,
      category: "research",
      tags: ["preservatives", "gut-health", "microbiome", "digestive-health"],
      publishedAt: "2024-01-14T14:20:00Z",
      readTime: 10,
      source: "Medical Journal Weekly",
      author: "Dr. Emily Rodriguez",
      imageUrl:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      relevanceScore: 8.7,
      views: 12350,
      likes: 743,
      shares: 89,
    },
    // Add more articles as needed
  };

  useEffect(() => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const foundArticle = articleDatabase[articleId];
      setArticle(foundArticle || null);
      setIsLoading(false);
    }, 1000);
  }, [articleId]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = (platform) => {
    if (!article) return;

    const url = window.location.href;
    const text = `Check out this article: ${article.title}`;

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            text
          )}&url=${encodeURIComponent(url)}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
        break;
    }
    setShowShareMenu(false);
  };

  const handleLike = () => {
    setHasLiked(!hasLiked);
    if (article) {
      setArticle({
        ...article,
        likes: hasLiked ? article.likes - 1 : article.likes + 1,
      });
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse space-y-6 max-w-4xl w-full px-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Article Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The article you're looking for doesn't exist.
          </p>
          <button
            onClick={onBack}
            className="bg-emerald-500 text-white px-6 py-3 rounded-xl hover:bg-emerald-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-sky-500 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to News</span>
            </button>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-lg transition-colors ${
                  isBookmarked
                    ? "bg-emerald-100 text-emerald-600"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Bookmark className="w-5 h-5" />
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                </button>

                {showShareMenu && (
                  <div className="absolute right-0 top-12 bg-white rounded-xl shadow-lg border border-gray-200 p-4 min-w-48 z-50">
                    <div className="space-y-2">
                      <button
                        onClick={() => handleShare("facebook")}
                        className="flex items-center space-x-3 w-full p-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <Facebook className="w-5 h-5 text-blue-600" />
                        <span>Facebook</span>
                      </button>
                      <button
                        onClick={() => handleShare("twitter")}
                        className="flex items-center space-x-3 w-full p-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <Twitter className="w-5 h-5 text-sky-500" />
                        <span>Twitter</span>
                      </button>
                      <button
                        onClick={() => handleShare("linkedin")}
                        className="flex items-center space-x-3 w-full p-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-blue-700" />
                        <span>LinkedIn</span>
                      </button>
                      <button
                        onClick={() => handleShare("copy")}
                        className="flex items-center space-x-3 w-full p-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        {copySuccess ? (
                          <Check className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-600" />
                        )}
                        <span>{copySuccess ? "Copied!" : "Copy Link"}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-8">
            {/* Hero Image */}
            <div className="relative h-96">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-800 capitalize">
                  {article.category}
                </span>
              </div>

              {/* Sponsored Badge */}
              {article.isSponsored && (
                <div className="absolute top-6 right-6">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Sponsored
                  </span>
                </div>
              )}
            </div>

            {/* Article Info */}
            <div className="p-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {article.title}
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {article.summary}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(article.publishedAt)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} min read</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>{article.views.toLocaleString()} views</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="flex items-center space-x-1 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
                  >
                    <Tag className="w-3 h-3" />
                    <span>#{tag}</span>
                  </span>
                ))}
              </div>

              {/* Engagement Stats */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-6">
                  <button
                    onClick={handleLike}
                    className={`flex items-center space-x-2 transition-colors ${
                      hasLiked
                        ? "text-emerald-600"
                        : "text-gray-600 hover:text-emerald-600"
                    }`}
                  >
                    <ThumbsUp
                      className={`w-5 h-5 ${hasLiked ? "fill-current" : ""}`}
                    />
                    <span>{article.likes}</span>
                  </button>

                  <div className="flex items-center space-x-2 text-gray-600">
                    <Share2 className="w-5 h-5" />
                    <span>{article.shares}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-gray-600">
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                  <span>{article.relevanceScore}/10</span>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: article.fullContent }}
            />

            {/* Affiliate Link */}
            {article.affiliateLink && (
              <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
                <h3 className="text-lg font-semibold text-amber-800 mb-3">
                  Related Products
                </h3>
                <p className="text-amber-700 mb-4">
                  Based on this article, you might be interested in these
                  health-focused products.
                </p>
                <a
                  href={article.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-xl font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-300"
                >
                  <span>Shop Related Products</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>

          {/* Author Bio */}
          <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              About the Author
            </h3>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {article.author}
                </h4>
                <p className="text-gray-600 mb-3">
                  Senior Health Writer at {article.source}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {article.author} is a certified nutritionist and health
                  journalist with over 10 years of experience covering the
                  latest developments in nutrition science and public health
                  policy. She holds a PhD in Nutritional Sciences and regularly
                  contributes to leading health publications.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mb-8">
            <HealthNews
              context="scan-result"
              scannedIngredients={article.tags}
              productCategory={article.category}
            />
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-emerald-500 to-sky-500 rounded-3xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with Health News
            </h3>
            <p className="text-lg mb-6 opacity-90">
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
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
