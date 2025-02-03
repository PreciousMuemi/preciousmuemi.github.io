const ParticleBackground = () => {
    const [particles, setParticles] = useState([]);
  
    useEffect(() => {
      const generateParticles = () => {
        const particleCount = 50;
        const newParticles = Array.from({ length: particleCount }, () => ({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.5 + 0.2
        }));
        setParticles(newParticles);
      };
  
      generateParticles();
      window.addEventListener('resize', generateParticles);
      return () => window.removeEventListener('resize', generateParticles);
    }, []);
  
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            initial={{ x: particle.x, y: particle.y, opacity: 0 }}
            animate={{ 
              x: particle.x + Math.sin(index) * 50, 
              y: particle.y, 
              opacity: [particle.opacity, 0, particle.opacity] 
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute rounded-full bg-indigo-900/30"
            style={{
              width: particle.size,
              height: particle.size,
            }}
          />
        ))}
      </div>
    );
  };
  