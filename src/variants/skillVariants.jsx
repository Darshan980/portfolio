const skillVariants = {
    container: {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 } }
    },
    item: {
      hidden: { opacity: 0, y: 10 },
      show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    },
    header: {
      initial: { opacity: 0, y: -20 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut" },
      viewport: { once: true, amount: 0.3 }
    },
    grid: {
      hidden: { opacity: 0, scale: 0.95 },
      show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } }
    }
  };
  
  export default skillVariants;
  