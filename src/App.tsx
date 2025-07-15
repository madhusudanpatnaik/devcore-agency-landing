import React, { useState, useEffect } from 'react';
import { Shield, Search, Globe, BookOpen, Code, GraduationCap, Menu, X, ExternalLink, Copy, Check, ChevronDown, Zap, Lock, Eye, Target, Users, Award, Calendar, User, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { HeroGeometric } from './components/ui/shape-landing-hero';
import { ContainerScroll } from './components/ui/container-scroll-animation';
import { AnimatedBackground } from './components/ui/animated-background';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const sections = [
    { id: 'home', title: 'Home', icon: Shield },
    { id: 'vulnerability-tools', title: 'Vulnerability Detection', icon: Search },
    { id: 'browser-extensions', title: 'Browser Extensions', icon: Globe },
    { id: 'best-practices', title: 'Best Practices', icon: BookOpen },
    { id: 'case-studies', title: 'Case Studies', icon: Shield },
    { id: 'code-snippets', title: 'Code & Commands', icon: Code },
    { id: 'blogs', title: 'Security Blogs', icon: BookOpen },
    { id: 'learning-resources', title: 'Learning Resources', icon: GraduationCap },
  ];

  const vulnerabilityTools = [
    {
      name: 'SQLMap',
      description: 'Automatic SQL injection and database takeover tool',
      category: 'SQL Injection',
      link: 'https://sqlmap.org/',
      features: ['Automatic detection', 'Database fingerprinting', 'Data extraction']
    },
    {
      name: 'XSStrike',
      description: 'Advanced XSS detection suite with fuzzing capabilities',
      category: 'XSS',
      link: 'https://github.com/s0md3v/XSStrike',
      features: ['Context analysis', 'Payload generation', 'WAF bypass']
    },
    {
      name: 'Burp Suite',
      description: 'Comprehensive web application security testing platform',
      category: 'General',
      link: 'https://portswigger.net/burp',
      features: ['Proxy', 'Scanner', 'Intruder', 'Repeater']
    },
    {
      name: 'OWASP ZAP',
      description: 'Free security testing proxy for web applications',
      category: 'General',
      link: 'https://www.zaproxy.org/',
      features: ['Active scanning', 'Passive scanning', 'API testing']
    },
    {
      name: 'Nuclei',
      description: 'Fast and customizable vulnerability scanner',
      category: 'General',
      link: 'https://nuclei.projectdiscovery.io/',
      features: ['Template-based', 'Fast scanning', 'Community templates']
    },
    {
      name: 'Commix',
      description: 'Automated command injection exploitation tool',
      category: 'Command Injection',
      link: 'https://github.com/commixproject/commix',
      features: ['Blind injection', 'Time-based', 'Error-based']
    }
  ];

  const browserExtensions = [
    {
      name: 'Wappalyzer',
      description: 'Technology profiler that shows you what websites are built with',
      features: ['Technology detection', 'CMS identification', 'Framework analysis'],
      link: 'https://www.wappalyzer.com/'
    },
    {
      name: 'HackTools',
      description: 'All-in-one Red Team browser extension for web pentesters',
      features: ['Payload generators', 'Encoders/Decoders', 'Hash generators'],
      link: 'https://github.com/LasCC/HackTools'
    },
    {
      name: 'FoxyProxy',
      description: 'Advanced proxy management tool for penetration testing',
      features: ['Proxy switching', 'Pattern matching', 'Multiple proxies'],
      link: 'https://getfoxyproxy.org/'
    },
    {
      name: 'Cookie-Editor',
      description: 'Cookie manager for security testing and analysis',
      features: ['Cookie editing', 'Import/Export', 'Search functionality'],
      link: 'https://cookie-editor.cgagnier.ca/'
    }
  ];

  const bestPractices = [
    {
      title: 'OWASP Testing Guide Methodology',
      description: 'Comprehensive framework for web application security testing',
      steps: [
        'Information Gathering',
        'Configuration and Deployment Management Testing',
        'Identity Management Testing',
        'Authentication Testing',
        'Authorization Testing',
        'Session Management Testing',
        'Input Validation Testing',
        'Error Handling',
        'Cryptography',
        'Business Logic Testing',
        'Client Side Testing'
      ]
    },
    {
      title: 'Bug Bounty Methodology',
      description: 'Systematic approach to finding vulnerabilities in bug bounty programs',
      steps: [
        'Reconnaissance and Asset Discovery',
        'Subdomain Enumeration',
        'Port Scanning and Service Detection',
        'Content Discovery',
        'Parameter Discovery',
        'Vulnerability Assessment',
        'Manual Testing',
        'Exploitation and PoC Development',
        'Report Writing'
      ]
    }
  ];

  const caseStudies = [
    {
      title: 'SQL Injection in Login Form',
      severity: 'Critical',
      description: 'Authentication bypass through SQL injection in user login functionality',
      steps: [
        'Identify login form with username/password fields',
        'Test for SQL injection using single quotes',
        'Observe database error messages',
        'Craft payload: admin\' OR \'1\'=\'1\' --',
        'Successfully bypass authentication'
      ],
      mitigation: [
        'Use parameterized queries/prepared statements',
        'Implement input validation',
        'Apply principle of least privilege',
        'Use stored procedures where appropriate'
      ]
    },
    {
      title: 'Stored XSS in Comment Section',
      severity: 'High',
      description: 'Persistent XSS vulnerability allowing script execution for all users',
      steps: [
        'Locate user input field (comment section)',
        'Test basic XSS payload: <script>alert(1)</script>',
        'Observe if payload is stored and executed',
        'Craft advanced payload for cookie theft',
        'Demonstrate impact with session hijacking'
      ],
      mitigation: [
        'Implement proper output encoding',
        'Use Content Security Policy (CSP)',
        'Validate and sanitize user input',
        'Use HTTPOnly and Secure flags for cookies'
      ]
    }
  ];

  const codeSnippets = [
    {
      category: 'Reconnaissance',
      title: 'Subdomain Enumeration',
      code: `# Using subfinder
subfinder -d target.com -o subdomains.txt

# Using amass
amass enum -d target.com -o amass_results.txt

# Using assetfinder
assetfinder target.com | tee assetfinder_results.txt

# Combine and sort results
cat subdomains.txt amass_results.txt assetfinder_results.txt | sort -u > all_subdomains.txt`,
      description: 'Comprehensive subdomain discovery using multiple tools'
    },
    {
      category: 'Network Scanning',
      title: 'Port Scanning with Nmap',
      code: `# Quick scan of top 1000 ports
nmap -T4 -F target.com

# Comprehensive scan with service detection
nmap -sS -sV -O -A target.com

# Scan specific ports
nmap -p 80,443,8080,8443 target.com

# UDP scan for common services
nmap -sU --top-ports 100 target.com`,
      description: 'Various Nmap scanning techniques for different scenarios'
    },
    {
      category: 'Web Testing',
      title: 'Directory Brute Force',
      code: `# Using gobuster
gobuster dir -u http://target.com -w /usr/share/wordlists/dirb/common.txt

# Using ffuf
ffuf -w /usr/share/wordlists/dirb/common.txt -u http://target.com/FUZZ

# Using dirsearch
dirsearch -u http://target.com -e php,html,js,txt

# Custom wordlist with extensions
gobuster dir -u http://target.com -w custom_wordlist.txt -x php,html,txt,js`,
      description: 'Directory and file discovery techniques'
    },
    {
      category: 'CORS Testing',
      title: 'CORS Misconfiguration Check',
      code: `# Test CORS with curl
curl -H "Origin: https://evil.com" -I http://target.com/api/data

# Check for wildcard CORS
curl -H "Origin: null" -I http://target.com/api/data

# Test with credentials
curl -H "Origin: https://evil.com" -H "Cookie: session=abc123" -I http://target.com/api/data

# Python script for CORS testing
import requests

def test_cors(url, origin):
    headers = {'Origin': origin}
    response = requests.get(url, headers=headers)
    return response.headers.get('Access-Control-Allow-Origin')`,
      description: 'Testing for CORS misconfigurations'
    }
  ];

  const blogPosts = [
    {
      title: 'Advanced SQL Injection Techniques in 2024',
      description: 'Explore modern SQL injection methods and bypass techniques for contemporary web applications.',
      author: 'Alex Security',
      date: '2024-01-15',
      category: 'Web Security',
      readTime: '8 min read',
      mediumUrl: 'https://medium.com/@cybersecurity/advanced-sql-injection-techniques-2024',
      tags: ['SQL Injection', 'Web Security', 'Penetration Testing']
    },
    {
      title: 'XSS Prevention: A Complete Developer Guide',
      description: 'Comprehensive guide on preventing Cross-Site Scripting attacks with practical examples and code samples.',
      author: 'Sarah DevSec',
      date: '2024-01-12',
      category: 'Web Security',
      readTime: '12 min read',
      mediumUrl: 'https://medium.com/@websecurity/xss-prevention-complete-guide',
      tags: ['XSS', 'Web Development', 'Security']
    },
    {
      title: 'API Security Testing with OWASP Top 10',
      description: 'Learn how to test API security using OWASP API Security Top 10 as your testing framework.',
      author: 'Mike APITester',
      date: '2024-01-10',
      category: 'API Security',
      readTime: '10 min read',
      mediumUrl: 'https://medium.com/@apisecurity/owasp-api-security-testing',
      tags: ['API Security', 'OWASP', 'Testing']
    },
    {
      title: 'Bug Bounty Methodology: From Recon to Report',
      description: 'Step-by-step methodology for successful bug bounty hunting with real-world examples.',
      author: 'John BugHunter',
      date: '2024-01-08',
      category: 'Bug Bounty',
      readTime: '15 min read',
      mediumUrl: 'https://medium.com/@bugbounty/methodology-recon-to-report',
      tags: ['Bug Bounty', 'Methodology', 'Reconnaissance']
    },
    {
      title: 'Container Security: Docker and Kubernetes Best Practices',
      description: 'Essential security practices for containerized applications and orchestration platforms.',
      author: 'Emma CloudSec',
      date: '2024-01-05',
      category: 'Cloud Security',
      readTime: '11 min read',
      mediumUrl: 'https://medium.com/@cloudsecurity/container-security-best-practices',
      tags: ['Container Security', 'Docker', 'Kubernetes']
    },
    {
      title: 'Social Engineering in Cybersecurity: Attack Vectors and Defense',
      description: 'Understanding social engineering tactics and how to build effective defenses against them.',
      author: 'David SocEng',
      date: '2024-01-03',
      category: 'Social Engineering',
      readTime: '9 min read',
      mediumUrl: 'https://medium.com/@socialengineering/attack-vectors-defense',
      tags: ['Social Engineering', 'Human Factor', 'Defense']
    },
    {
      title: 'Zero-Day Vulnerability Research: Tools and Techniques',
      description: 'Advanced techniques for discovering zero-day vulnerabilities in modern software systems.',
      author: 'Lisa ZeroDay',
      date: '2024-01-01',
      category: 'Vulnerability Research',
      readTime: '14 min read',
      mediumUrl: 'https://medium.com/@vulnresearch/zero-day-research-techniques',
      tags: ['Zero-Day', 'Vulnerability Research', 'Exploit Development']
    },
    {
      title: 'Network Penetration Testing with Python',
      description: 'Building custom penetration testing tools using Python for network security assessments.',
      author: 'Chris NetPen',
      date: '2023-12-28',
      category: 'Network Security',
      readTime: '13 min read',
      mediumUrl: 'https://medium.com/@networksecurity/penetration-testing-python',
      tags: ['Network Security', 'Python', 'Penetration Testing']
    }
  ];

  const learningResources = [
    {
      category: 'Courses',
      resources: [
        { name: 'OSCP - Offensive Security Certified Professional', link: 'https://www.offensive-security.com/pwk-oscp/', type: 'Certification' },
        { name: 'PortSwigger Web Security Academy', link: 'https://portswigger.net/web-security', type: 'Free Course' },
        { name: 'SANS SEC542: Web App Penetration Testing', link: 'https://www.sans.org/cyber-security-courses/web-app-penetration-testing-ethical-hacking/', type: 'Course' },
        { name: 'Cybrary - Penetration Testing', link: 'https://www.cybrary.it/course/penetration-testing/', type: 'Free Course' }
      ]
    },
    {
      category: 'Blogs & Websites',
      resources: [
        { name: 'OWASP', link: 'https://owasp.org/', type: 'Organization' },
        { name: 'PortSwigger Research', link: 'https://portswigger.net/research', type: 'Research' },
        { name: 'HackerOne Hacktivity', link: 'https://hackerone.com/hacktivity', type: 'Bug Bounty' },
        { name: 'Bugcrowd Blog', link: 'https://www.bugcrowd.com/blog/', type: 'Blog' }
      ]
    },
    {
      category: 'Communities',
      resources: [
        { name: 'r/netsec', link: 'https://reddit.com/r/netsec', type: 'Reddit' },
        { name: 'InfoSec Twitter Community', link: 'https://twitter.com/search?q=%23infosec', type: 'Twitter' },
        { name: 'OWASP Local Chapters', link: 'https://owasp.org/chapters/', type: 'Local Groups' },
        { name: 'DEF CON Groups', link: 'https://defcon.org/html/links/dc-groups.html', type: 'Local Groups' }
      ]
    },
    {
      category: 'Practice Platforms',
      resources: [
        { name: 'HackTheBox', link: 'https://www.hackthebox.eu/', type: 'Platform' },
        { name: 'TryHackMe', link: 'https://tryhackme.com/', type: 'Platform' },
        { name: 'VulnHub', link: 'https://www.vulnhub.com/', type: 'VMs' },
        { name: 'OverTheWire', link: 'https://overthewire.org/', type: 'Wargames' }
      ]
    }
  ];

  const features = [
    {
      icon: Target,
      title: "Vulnerability Detection",
      description: "Advanced tools for identifying security flaws",
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      icon: Globe,
      title: "Browser Extensions",
      description: "Essential security testing extensions",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: BookOpen,
      title: "Best Practices",
      description: "Proven methodologies and frameworks",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Shield,
      title: "Case Studies",
      description: "Real-world vulnerability examples",
      color: "from-purple-500/20 to-violet-500/20"
    },
    {
      icon: Code,
      title: "Code Snippets",
      description: "Ready-to-use commands and scripts",
      color: "from-yellow-500/20 to-amber-500/20"
    },
    {
      icon: GraduationCap,
      title: "Learning Resources",
      description: "Curated educational content",
      color: "from-pink-500/20 to-rose-500/20"
    }
  ];

  const stats = [
    { number: "50+", label: "Security Tools", icon: Zap },
    { number: "100+", label: "Code Snippets", icon: Code },
    { number: "25+", label: "Case Studies", icon: Eye },
    { number: "1000+", label: "Security Professionals", icon: Users }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-0">
            {/* Hero Section */}
            <section id="hero" className="relative">
              <HeroGeometric 
                badge="Advanced Cybersecurity Toolkit"
                title1="Professional"
                title2="Security Arsenal"
              />
            </section>

            {/* Features Overview with Scroll Animation */}
            <ContainerScroll
              titleComponent={
                <div className="text-center mb-16 px-4">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold bg-[linear-gradient(127deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,1)_23%,rgba(255,255,255,1)_51%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent mb-6 font-['Geist',Helvetica]"
                  >
                    Complete Security Toolkit
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-white/60 max-w-3xl mx-auto font-['Inter',Helvetica]"
                  >
                    Everything you need for professional cybersecurity testing and analysis
                  </motion.p>
                </div>
              }
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#dbfc7f]/30 transition-all duration-300 group cursor-pointer"
                      onClick={() => scrollToSection(feature.title.toLowerCase().replace(' ', '-'))}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#dbfc7f] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                        {feature.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </ContainerScroll>

            {/* Stats Section */}
            <section className="py-20 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="text-center group"
                      >
                        <div className="w-16 h-16 mx-auto mb-4 bg-[#dbfc7f]/10 rounded-full flex items-center justify-center group-hover:bg-[#dbfc7f]/20 transition-colors duration-300">
                          <Icon className="w-8 h-8 text-[#dbfc7f]" />
                        </div>
                        <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-['Geist',Helvetica]">
                          {stat.number}
                        </div>
                        <div className="text-white/60 font-['Inter',Helvetica]">
                          {stat.label}
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative">
              <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold bg-[linear-gradient(127deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,1)_23%,rgba(255,255,255,1)_51%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent mb-6 font-['Geist',Helvetica]">
                    Ready to Enhance Your Security Skills?
                  </h2>
                  <p className="text-xl text-white/60 mb-8 font-['Inter',Helvetica]">
                    Join thousands of security professionals using our comprehensive toolkit
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      className="px-8 py-4 bg-[#dbfc7f] text-black font-semibold rounded-full hover:bg-[#fafc7f] transition-all duration-300 shadow-[0px_0px_0px_4px_#fafd7f1a,0px_4px_30px_#fafd7f99] hover:shadow-[0px_0px_0px_6px_#fafd7f2a,0px_6px_40px_#fafd7f99] transform hover:scale-105"
                      onClick={() => scrollToSection('vulnerability-tools')}
                    >
                      Start Exploring
                    </Button>
                    <Button 
                      variant="outline"
                      className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border border-white/20 hover:border-[#dbfc7f]/50 hover:text-[#dbfc7f] transition-all duration-300 backdrop-blur-sm"
                      onClick={() => scrollToSection('learning-resources')}
                    >
                      View Resources
                    </Button>
                  </div>
                </motion.div>
              </div>
            </section>
          </div>
        );

      case 'vulnerability-tools':
        return (
          <div className="min-h-screen py-20" id="vulnerability-tools" data-animate>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <h2 className="text-5xl font-bold bg-[linear-gradient(127deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,1)_23%,rgba(255,255,255,1)_51%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent mb-4 font-['Geist',Helvetica]">
                    Vulnerability Detection Tools
                  </h2>
                  <p className="text-xl text-white opacity-60 max-w-3xl mx-auto">
                    Curated collection of tools for identifying web application vulnerabilities
                  </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {vulnerabilityTools.map((tool, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="bg-[#252429] border-[#3e3d42] hover:border-[#dbfc7f] transition-all duration-300 hover:shadow-[0px_0px_20px_#dbfc7f33] group h-full">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-white font-['Inter',Helvetica] group-hover:text-[#dbfc7f] transition-colors">
                              {tool.name}
                            </CardTitle>
                            <Badge className="bg-[#dbfc7f] text-black border-none">
                              {tool.category}
                            </Badge>
                          </div>
                          <CardDescription className="text-white opacity-60">
                            {tool.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-semibold text-[#dbfc7f] mb-2">Features:</h4>
                              <ul className="space-y-1">
                                {tool.features.map((feature, idx) => (
                                  <li key={idx} className="text-sm text-white opacity-80 flex items-center">
                                    <div className="w-1.5 h-1.5 bg-[#dbfc7f] rounded-full mr-2"></div>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <Button 
                              className="w-full bg-[#dbfc7f] text-black font-semibold hover:bg-[#fafc7f] border border-[#fafc7f] transform hover:scale-105 transition-all duration-300"
                              onClick={() => window.open(tool.link, '_blank')}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Visit Tool
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'browser-extensions':
        return (
          <div className="min-h-screen py-20" id="browser-extensions" data-animate>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <h2 className="text-5xl font-bold bg-[linear-gradient(127deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,1)_23%,rgba(255,255,255,1)_51%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent mb-4 font-['Geist',Helvetica]">
                    Browser Extensions
                  </h2>
                  <p className="text-xl text-white opacity-60 max-w-3xl mx-auto">
                    Essential browser extensions for cybersecurity testing and analysis
                  </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {browserExtensions.map((extension, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="bg-[#252429] border-[#3e3d42] hover:border-[#dbfc7f] transition-all duration-300 hover:shadow-[0px_0px_20px_#dbfc7f33] group h-full">
                        <CardHeader>
                          <CardTitle className="text-white font-['Inter',Helvetica] group-hover:text-[#dbfc7f] transition-colors">
                            {extension.name}
                          </CardTitle>
                          <CardDescription className="text-white opacity-60">
                            {extension.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-semibold text-[#dbfc7f] mb-2">Key Features:</h4>
                              <ul className="space-y-1">
                                {extension.features.map((feature, idx) => (
                                  <li key={idx} className="text-sm text-white opacity-80 flex items-center">
                                    <div className="w-1.5 h-1.5 bg-[#dbfc7f] rounded-full mr-2"></div>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <Button 
                              className="w-full bg-[#dbfc7f] text-black font-semibold hover:bg-[#fafc7f] border border-[#fafc7f] transform hover:scale-105 transition-all duration-300"
                              onClick={() => window.open(extension.link, '_blank')}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Get Extension
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'best-practices':
        return (
          <div className="min-h-screen py-20" id="best-practices" data-animate>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <h2 className="text-5xl font-bold bg-[linear-gradient(127deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,1)_23%,rgba(255,255,255,1)_51%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent mb-4 font-['Geist',Helvetica]">
                    Security Best Practices
                  </h2>
                  <p className="text-xl text-white opacity-60 max-w-3xl mx-auto">
                    Proven methodologies for effective penetration testing and security assessment
                  </p>
                </motion.div>
                <div className="space-y-6">
                  {bestPractices.map((practice, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="bg-[#252429] border-[#3e3d42] hover:border-[#dbfc7f] transition-all duration-300 hover:shadow-[0px_0px_20px_#dbfc7f33]">
                        <CardHeader>
                          <CardTitle className="text-white font-['Inter',Helvetica]">{practice.title}</CardTitle>
                          <CardDescription className="text-white opacity-60">
                            {practice.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {practice.steps.map((step, idx) => (
                              <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className="flex items-center space-x-3 p-4 bg-[#1d1c21] rounded-lg border border-[#3e3d42] hover:border-[#dbfc7f]/30 transition-all duration-300 group"
                              >
                                <div className="flex-shrink-0 w-8 h-8 bg-[#dbfc7f] text-black rounded-full flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300">
                                  {idx + 1}
                                </div>
                                <span className="text-white opacity-80 text-sm group-hover:opacity-100 transition-opacity">{step}</span>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'case-studies':
        return (
          <div className="min-h-screen py-20" id="case-studies" data-animate>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <h2 className="text-5xl font-bold bg-[linear-gradient(127deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,1)_23%,rgba(255,255,255,1)_51%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent mb-4 font-['Geist',Helvetica]">
                    Vulnerability Case Studies
                  </h2>
                  <p className="text-xl text-white opacity-60 max-w-3xl mx-auto">
                    Real-world vulnerability examples with exploitation steps and mitigation strategies
                  </p>
                </motion.div>
                <div className="space-y-6">
                  {caseStudies.map((study, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="bg-[#252429] border-[#3e3d42] hover:border-[#dbfc7f] transition-all duration-300 hover:shadow-[0px_0px_20px_#dbfc7f33]">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-white font-['Inter',Helvetica]">{study.title}</CardTitle>
                            <Badge 
                              className={`${
                                study.severity === 'Critical' ? 'bg-red-500 text-white' :
                                study.severity === 'High' ? 'bg-orange-500 text-white' :
                                'bg-yellow-500 text-black'
                              } border-none`}
                            >
                              {study.severity}
                            </Badge>
                          </div>
                          <CardDescription className="text-white opacity-60">
                            {study.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-lg font-semibold text-[#dbfc7f] mb-3">Exploitation Steps</h4>
                              <ol className="space-y-2">
                                {study.steps.map((step, idx) => (
                                  <motion.li 
                                    key={idx} 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                    className="flex items-start space-x-3"
                                  >
                                    <div className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                                      {idx + 1}
                                    </div>
                                    <span className="text-white opacity-80 text-sm">{step}</span>
                                  </motion.li>
                                ))}
                              </ol>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-[#a5ebc7] mb-3">Mitigation Strategies</h4>
                              <ul className="space-y-2">
                                {study.mitigation.map((item, idx) => (
                                  <motion.li 
                                    key={idx} 
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                    className="flex items-start space-x-3"
                                  >
                                    <div className="w-1.5 h-1.5 bg-[#a5ebc7] rounded-full mr-2 mt-2"></div>
                                    <span className="text-white opacity-80 text-sm">{item}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'code-snippets':
        return (
          <div className="min-h-screen py-20" id="code-snippets" data-animate>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <h2 className="text-5xl font-bold bg-[linear-gradient(127deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,1)_23%,rgba(255,255,255,1)_51%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent mb-4 font-['Geist',Helvetica]">
                    Code Snippets & Commands
                  </h2>
                  <p className="text-xl text-white opacity-60 max-w-3xl mx-auto">
                    Practical command-line examples and code snippets for common security tasks
                  </p>
                </motion.div>
                <div className="space-y-6">
                  {codeSnippets.map((snippet, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="bg-[#252429] border-[#3e3d42] hover:border-[#dbfc7f] transition-all duration-300 hover:shadow-[0px_0px_20px_#dbfc7f33]">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-white font-['Inter',Helvetica]">{snippet.title}</CardTitle>
                              <CardDescription className="text-white opacity-60 mt-2">
                                {snippet.description}
                              </CardDescription>
                            </div>
                            <Badge className="bg-[#dbfc7f] text-black border-none">
                              {snippet.category}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="relative">
                            <pre className="bg-[#1d1c21] p-4 rounded-lg overflow-x-auto text-sm text-white border border-[#3e3d42] hover:border-[#dbfc7f]/30 transition-colors duration-300">
                              <code>{snippet.code}</code>
                            </pre>
                            <Button
                              size="sm"
                              className="absolute top-2 right-2 bg-[#dbfc7f] text-black hover:bg-[#fafc7f] transform hover:scale-105 transition-all duration-300"
                              onClick={() => copyToClipboard(snippet.code, `snippet-${index}`)}
                            >
                              {copiedCode === `snippet-${index}` ? (
                                <Check className="w-4 h-4" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'blogs':
        return (
          <div className="min-h-screen py-20" id="blogs" data-animate>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <h2 className="text-5xl font-bold bg-[linear-gradient(127deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,1)_23%,rgba(255,255,255,1)_51%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent mb-4 font-['Geist',Helvetica]">
                    Security Blogs & Articles
                  </h2>
                  <p className="text-xl text-white opacity-60 max-w-3xl mx-auto">
                    Latest insights and deep-dive articles on cybersecurity topics
                  </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts.map((post, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="bg-[#252429] border-[#3e3d42] hover:border-[#dbfc7f] transition-all duration-300 hover:shadow-[0px_0px_20px_#dbfc7f33] group cursor-pointer h-full"
                            onClick={() => window.open(post.mediumUrl, '_blank')}>
                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <Badge className="bg-[#dbfc7f] text-black border-none text-xs">
                              {post.category}
                            </Badge>
                            <div className="text-xs text-white/40 flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                          </div>
                          <CardTitle className="text-white font-['Inter',Helvetica] group-hover:text-[#dbfc7f] transition-colors line-clamp-2">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="text-white opacity-60 line-clamp-3">
                            {post.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex flex-wrap gap-1">
                              {post.tags.map((tag, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs bg-[#3e3d42] text-white border-[#3e3d42]">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center text-sm text-white/60">
                                <User className="w-4 h-4 mr-1" />
                                {post.author}
                              </div>
                              <div className="text-sm text-white/60">
                                {post.readTime}
                              </div>
                            </div>
                            <Button 
                              className="w-full bg-[#dbfc7f] text-black font-semibold hover:bg-[#fafc7f] border border-[#fafc7f] transform hover:scale-105 transition-all duration-300 group-hover:shadow-lg"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(post.mediumUrl, '_blank');
                              }}
                            >
                              Read on Medium
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'learning-resources':
        return (
          <div className="min-h-screen py-20" id="learning-resources" data-animate>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <h2 className="text-5xl font-bold bg-[linear-gradient(127deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,1)_23%,rgba(255,255,255,1)_51%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent mb-4 font-['Geist',Helvetica]">
                    Learning Resources
                  </h2>
                  <p className="text-xl text-white opacity-60 max-w-3xl mx-auto">
                    Curated resources for continuous learning in cybersecurity
                  </p>
                </motion.div>
                <div className="space-y-6">
                  {learningResources.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="bg-[#252429] border-[#3e3d42] hover:border-[#dbfc7f] transition-all duration-300 hover:shadow-[0px_0px_20px_#dbfc7f33]">
                        <CardHeader>
                          <CardTitle className="text-white font-['Inter',Helvetica]">{category.category}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {category.resources.map((resource, idx) => (
                              <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className="flex items-center justify-between p-4 bg-[#1d1c21] rounded-lg border border-[#3e3d42] hover:border-[#dbfc7f] transition-all duration-300 group"
                              >
                                <div>
                                  <h4 className="text-white font-medium group-hover:text-[#dbfc7f] transition-colors">{resource.name}</h4>
                                  <Badge className="text-xs bg-[#3e3d42] text-white border-none mt-1">
                                    {resource.type}
                                  </Badge>
                                </div>
                                <Button
                                  size="sm"
                                  className="bg-[#dbfc7f] text-black hover:bg-[#fafc7f] transform hover:scale-105 transition-all duration-300"
                                  onClick={() => window.open(resource.link, '_blank')}
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </Button>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#1d1c21] relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#3e3d42] backdrop-blur-[20px] bg-[#1d1c21]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <div className="w-10 h-10 bg-[#dbfc7f] rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-black" />
              </div>
              <h1 className="text-2xl font-bold text-white tracking-[2px] font-['Geist',Helvetica]">
                CyberCore
              </h1>
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex px-8 py-3 rounded-[100px] border border-[#3e3d42] backdrop-blur-[20px] bg-[#252429]">
              <div className="flex items-center gap-6">
                {sections.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Button
                        variant="ghost"
                        className={`flex items-center space-x-2 px-4 py-2 rounded-[100px] transition-all duration-300 ${
                          activeSection === section.id 
                            ? "bg-[#dbfc7f] text-black hover:bg-[#fafc7f]" 
                            : "text-white hover:text-[#dbfc7f] hover:bg-[#3e3d42]"
                        }`}
                        onClick={() => scrollToSection(section.id)}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="hidden xl:inline font-medium">{section.title}</span>
                      </Button>
                    </motion.div>
                  );
                })}
              </div>
            </nav>

            {/* Contact button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button className="hidden lg:block h-[52px] bg-[#dbfc7f] text-black font-semibold rounded-[100px] border border-[#fafc7f] hover:bg-[#fafc7f] shadow-[0px_0px_0px_4px_#fafd7f1a,0px_4px_30px_#fafd7f99] transform hover:scale-105 transition-all duration-300">
                Get Started
              </Button>
            </motion.div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#252429] border-t border-[#3e3d42] backdrop-blur-[20px]"
          >
            <div className="px-4 py-4 space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <Button
                    key={section.id}
                    variant="ghost"
                    className={`w-full justify-start flex items-center space-x-3 p-4 rounded-lg transition-all duration-300 ${
                      activeSection === section.id 
                        ? "bg-[#dbfc7f] text-black" 
                        : "text-white hover:text-[#dbfc7f] hover:bg-[#3e3d42]"
                    }`}
                    onClick={() => scrollToSection(section.id)}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{section.title}</span>
                  </Button>
                );
              })}
            </div>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-20 pt-20">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="relative z-20 border-t border-[#3e3d42] backdrop-blur-[20px] mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-white opacity-60 font-['Inter',Helvetica]">
              Advanced Cybersecurity Toolkit - Educational purposes only. Always ensure proper authorization before testing.
            </p>
            <p className="text-white opacity-40 text-sm mt-2 font-['Inter',Helvetica]">
              Built for cybersecurity professionals and enthusiasts
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default App;