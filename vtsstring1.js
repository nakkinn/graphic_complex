let vtsstring1 = "[[l + r, 0, 0], [l + ((1 + Math.sqrt(5))*r)/4, 0,   Math.sqrt(5/8 - Math.sqrt(5)/8)*r], [l + ((-1 + Math.sqrt(5))*r)/4, 0,   Math.sqrt(5/8 + Math.sqrt(5)/8)*r], [l + ((1 - Math.sqrt(5))*r)/4, 0,   Math.sqrt(5/8 + Math.sqrt(5)/8)*r], [l + ((-1 - Math.sqrt(5))*r)/4, 0,   Math.sqrt(5/8 - Math.sqrt(5)/8)*r], [l - r, 0, 0],  [l + ((-1 - Math.sqrt(5))*r)/4, 0, -(Math.sqrt(5/8 - Math.sqrt(5)/8)*r)],  [l + ((1 - Math.sqrt(5))*r)/4, 0, -(Math.sqrt(5/8 + Math.sqrt(5)/8)*r)],  [l + ((-1 + Math.sqrt(5))*r)/4, 0, -(Math.sqrt(5/8 + Math.sqrt(5)/8)*r)],  [l + ((1 + Math.sqrt(5))*r)/4, 0, -(Math.sqrt(5/8 - Math.sqrt(5)/8)*r)],  [l + r, 0, 0], [((1 + Math.sqrt(5))*l)/4 + ((1 + Math.sqrt(5))*r)/4,   Math.sqrt(5/8 - Math.sqrt(5)/8)*l + Math.sqrt(5/8 - Math.sqrt(5)/8)*r, 0],  [((1 + Math.sqrt(5))*l)/4 + ((1 + Math.sqrt(5))**2*r)/16,   Math.sqrt(5/8 - Math.sqrt(5)/8)*l + (Math.sqrt(5/8 - Math.sqrt(5)/8)*     (1 + Math.sqrt(5))*r)/4, Math.sqrt(5/8 - Math.sqrt(5)/8)*r],  [((1 + Math.sqrt(5))*l)/4 + ((-1 + Math.sqrt(5))*(1 + Math.sqrt(5))*r)/16,   Math.sqrt(5/8 - Math.sqrt(5)/8)*l + (Math.sqrt(5/8 - Math.sqrt(5)/8)*     (-1 + Math.sqrt(5))*r)/4, Math.sqrt(5/8 + Math.sqrt(5)/8)*r],  [((1 + Math.sqrt(5))*l)/4 + ((1 - Math.sqrt(5))*(1 + Math.sqrt(5))*r)/16,   Math.sqrt(5/8 - Math.sqrt(5)/8)*l +    ((1 - Math.sqrt(5))*Math.sqrt(5/8 - Math.sqrt(5)/8)*r)/4,   Math.sqrt(5/8 + Math.sqrt(5)/8)*r],  [((1 + Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*(1 + Math.sqrt(5))*r)/16,   Math.sqrt(5/8 - Math.sqrt(5)/8)*l +    ((-1 - Math.sqrt(5))*Math.sqrt(5/8 - Math.sqrt(5)/8)*r)/4,   Math.sqrt(5/8 - Math.sqrt(5)/8)*r],  [((1 + Math.sqrt(5))*l)/4 - ((1 + Math.sqrt(5))*r)/4,   Math.sqrt(5/8 - Math.sqrt(5)/8)*l - Math.sqrt(5/8 - Math.sqrt(5)/8)*r, 0],  [((1 + Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*(1 + Math.sqrt(5))*r)/16,   Math.sqrt(5/8 - Math.sqrt(5)/8)*l +    ((-1 - Math.sqrt(5))*Math.sqrt(5/8 - Math.sqrt(5)/8)*r)/4,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*r)],  [((1 + Math.sqrt(5))*l)/4 + ((1 - Math.sqrt(5))*(1 + Math.sqrt(5))*r)/16,   Math.sqrt(5/8 - Math.sqrt(5)/8)*l +    ((1 - Math.sqrt(5))*Math.sqrt(5/8 - Math.sqrt(5)/8)*r)/4,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*r)],  [((1 + Math.sqrt(5))*l)/4 + ((-1 + Math.sqrt(5))*(1 + Math.sqrt(5))*r)/16,   Math.sqrt(5/8 - Math.sqrt(5)/8)*l + (Math.sqrt(5/8 - Math.sqrt(5)/8)*     (-1 + Math.sqrt(5))*r)/4, -(Math.sqrt(5/8 + Math.sqrt(5)/8)*r)],  [((1 + Math.sqrt(5))*l)/4 + ((1 + Math.sqrt(5))**2*r)/16,   Math.sqrt(5/8 - Math.sqrt(5)/8)*l + (Math.sqrt(5/8 - Math.sqrt(5)/8)*     (1 + Math.sqrt(5))*r)/4, -(Math.sqrt(5/8 - Math.sqrt(5)/8)*r)],  [((1 + Math.sqrt(5))*l)/4 + ((1 + Math.sqrt(5))*r)/4,   Math.sqrt(5/8 - Math.sqrt(5)/8)*l + Math.sqrt(5/8 - Math.sqrt(5)/8)*r, 0],  [((-1 + Math.sqrt(5))*l)/4 + ((-1 + Math.sqrt(5))*r)/4,   Math.sqrt(5/8 + Math.sqrt(5)/8)*l + Math.sqrt(5/8 + Math.sqrt(5)/8)*r, 0],  [((-1 + Math.sqrt(5))*l)/4 + ((-1 + Math.sqrt(5))*(1 + Math.sqrt(5))*r)/16,   Math.sqrt(5/8 + Math.sqrt(5)/8)*l + (Math.sqrt(5/8 + Math.sqrt(5)/8)*     (1 + Math.sqrt(5))*r)/4, Math.sqrt(5/8 - Math.sqrt(5)/8)*r],  [((-1 + Math.sqrt(5))*l)/4 + ((-1 + Math.sqrt(5))**2*r)/16,   Math.sqrt(5/8 + Math.sqrt(5)/8)*l + (Math.sqrt(5/8 + Math.sqrt(5)/8)*     (-1 + Math.sqrt(5))*r)/4, Math.sqrt(5/8 + Math.sqrt(5)/8)*r],  [((-1 + Math.sqrt(5))*l)/4 + ((1 - Math.sqrt(5))*(-1 + Math.sqrt(5))*r)/16,   Math.sqrt(5/8 + Math.sqrt(5)/8)*l +    ((1 - Math.sqrt(5))*Math.sqrt(5/8 + Math.sqrt(5)/8)*r)/4,   Math.sqrt(5/8 + Math.sqrt(5)/8)*r],  [((-1 + Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*(-1 + Math.sqrt(5))*r)/    16, Math.sqrt(5/8 + Math.sqrt(5)/8)*l +    ((-1 - Math.sqrt(5))*Math.sqrt(5/8 + Math.sqrt(5)/8)*r)/4,   Math.sqrt(5/8 - Math.sqrt(5)/8)*r],  [((-1 + Math.sqrt(5))*l)/4 - ((-1 + Math.sqrt(5))*r)/4,   Math.sqrt(5/8 + Math.sqrt(5)/8)*l - Math.sqrt(5/8 + Math.sqrt(5)/8)*r, 0],  [((-1 + Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*(-1 + Math.sqrt(5))*r)/    16, Math.sqrt(5/8 + Math.sqrt(5)/8)*l +    ((-1 - Math.sqrt(5))*Math.sqrt(5/8 + Math.sqrt(5)/8)*r)/4,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*r)],  [((-1 + Math.sqrt(5))*l)/4 + ((1 - Math.sqrt(5))*(-1 + Math.sqrt(5))*r)/16,   Math.sqrt(5/8 + Math.sqrt(5)/8)*l +    ((1 - Math.sqrt(5))*Math.sqrt(5/8 + Math.sqrt(5)/8)*r)/4,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*r)],  [((-1 + Math.sqrt(5))*l)/4 + ((-1 + Math.sqrt(5))**2*r)/16,   Math.sqrt(5/8 + Math.sqrt(5)/8)*l + (Math.sqrt(5/8 + Math.sqrt(5)/8)*     (-1 + Math.sqrt(5))*r)/4, -(Math.sqrt(5/8 + Math.sqrt(5)/8)*r)],  [((-1 + Math.sqrt(5))*l)/4 + ((-1 + Math.sqrt(5))*(1 + Math.sqrt(5))*r)/16,   Math.sqrt(5/8 + Math.sqrt(5)/8)*l + (Math.sqrt(5/8 + Math.sqrt(5)/8)*     (1 + Math.sqrt(5))*r)/4, -(Math.sqrt(5/8 - Math.sqrt(5)/8)*r)],  [((-1 + Math.sqrt(5))*l)/4 + ((-1 + Math.sqrt(5))*r)/4,   Math.sqrt(5/8 + Math.sqrt(5)/8)*l + Math.sqrt(5/8 + Math.sqrt(5)/8)*r, 0],  [((1 - Math.sqrt(5))*l)/4 + ((1 - Math.sqrt(5))*r)/4,   Math.sqrt(5/8 + Math.sqrt(5)/8)*l + Math.sqrt(5/8 + Math.sqrt(5)/8)*r, 0],  [((1 - Math.sqrt(5))*l)/4 + ((1 - Math.sqrt(5))*(1 + Math.sqrt(5))*r)/16,   Math.sqrt(5/8 + Math.sqrt(5)/8)*l + (Math.sqrt(5/8 + Math.sqrt(5)/8)*     (1 + Math.sqrt(5))*r)/4, Math.sqrt(5/8 - Math.sqrt(5)/8)*r],  [((1 - Math.sqrt(5))*l)/4 + ((1 - Math.sqrt(5))*(-1 + Math.sqrt(5))*r)/16,   Math.sqrt(5/8 + Math.sqrt(5)/8)*l + (Math.sqrt(5/8 + Math.sqrt(5)/8)*     (-1 + Math.sqrt(5))*r)/4, Math.sqrt(5/8 + Math.sqrt(5)/8)*r],  [((1 - Math.sqrt(5))*l)/4 + ((1 - Math.sqrt(5))**2*r)/16,   Math.sqrt(5/8 + Math.sqrt(5)/8)*l +    ((1 - Math.sqrt(5))*Math.sqrt(5/8 + Math.sqrt(5)/8)*r)/4,   Math.sqrt(5/8 + Math.sqrt(5)/8)*r],  [((1 - Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*(1 - Math.sqrt(5))*r)/16,   Math.sqrt(5/8 + Math.sqrt(5)/8)*l +    ((-1 - Math.sqrt(5))*Math.sqrt(5/8 + Math.sqrt(5)/8)*r)/4,   Math.sqrt(5/8 - Math.sqrt(5)/8)*r],  [((1 - Math.sqrt(5))*l)/4 - ((1 - Math.sqrt(5))*r)/4,   Math.sqrt(5/8 + Math.sqrt(5)/8)*l - Math.sqrt(5/8 + Math.sqrt(5)/8)*r, 0],  [((1 - Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*(1 - Math.sqrt(5))*r)/16,   Math.sqrt(5/8 + Math.sqrt(5)/8)*l +    ((-1 - Math.sqrt(5))*Math.sqrt(5/8 + Math.sqrt(5)/8)*r)/4,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*r)],  [((1 - Math.sqrt(5))*l)/4 + ((1 - Math.sqrt(5))**2*r)/16,   Math.sqrt(5/8 + Math.sqrt(5)/8)*l +    ((1 - Math.sqrt(5))*Math.sqrt(5/8 + Math.sqrt(5)/8)*r)/4,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*r)],  [((1 - Math.sqrt(5))*l)/4 + ((1 - Math.sqrt(5))*(-1 + Math.sqrt(5))*r)/16,   Math.sqrt(5/8 + Math.sqrt(5)/8)*l + (Math.sqrt(5/8 + Math.sqrt(5)/8)*     (-1 + Math.sqrt(5))*r)/4, -(Math.sqrt(5/8 + Math.sqrt(5)/8)*r)],  [((1 - Math.sqrt(5))*l)/4 + ((1 - Math.sqrt(5))*(1 + Math.sqrt(5))*r)/16,   Math.sqrt(5/8 + Math.sqrt(5)/8)*l + (Math.sqrt(5/8 + Math.sqrt(5)/8)*     (1 + Math.sqrt(5))*r)/4, -(Math.sqrt(5/8 - Math.sqrt(5)/8)*r)],  [((1 - Math.sqrt(5))*l)/4 + ((1 - Math.sqrt(5))*r)/4,   Math.sqrt(5/8 + Math.sqrt(5)/8)*l + Math.sqrt(5/8 + Math.sqrt(5)/8)*r, 0],  [((-1 - Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*r)/4,   Math.sqrt(5/8 - Math.sqrt(5)/8)*l + Math.sqrt(5/8 - Math.sqrt(5)/8)*r, 0],  [((-1 - Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*(1 + Math.sqrt(5))*r)/16,   Math.sqrt(5/8 - Math.sqrt(5)/8)*l + (Math.sqrt(5/8 - Math.sqrt(5)/8)*     (1 + Math.sqrt(5))*r)/4, Math.sqrt(5/8 - Math.sqrt(5)/8)*r],  [((-1 - Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*(-1 + Math.sqrt(5))*r)/    16, Math.sqrt(5/8 - Math.sqrt(5)/8)*l +    (Math.sqrt(5/8 - Math.sqrt(5)/8)*(-1 + Math.sqrt(5))*r)/4,   Math.sqrt(5/8 + Math.sqrt(5)/8)*r],  [((-1 - Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*(1 - Math.sqrt(5))*r)/16,   Math.sqrt(5/8 - Math.sqrt(5)/8)*l +    ((1 - Math.sqrt(5))*Math.sqrt(5/8 - Math.sqrt(5)/8)*r)/4,   Math.sqrt(5/8 + Math.sqrt(5)/8)*r],  [((-1 - Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))**2*r)/16,   Math.sqrt(5/8 - Math.sqrt(5)/8)*l +    ((-1 - Math.sqrt(5))*Math.sqrt(5/8 - Math.sqrt(5)/8)*r)/4,   Math.sqrt(5/8 - Math.sqrt(5)/8)*r],  [((-1 - Math.sqrt(5))*l)/4 - ((-1 - Math.sqrt(5))*r)/4,   Math.sqrt(5/8 - Math.sqrt(5)/8)*l - Math.sqrt(5/8 - Math.sqrt(5)/8)*r, 0],  [((-1 - Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))**2*r)/16,   Math.sqrt(5/8 - Math.sqrt(5)/8)*l +    ((-1 - Math.sqrt(5))*Math.sqrt(5/8 - Math.sqrt(5)/8)*r)/4,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*r)],  [((-1 - Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*(1 - Math.sqrt(5))*r)/16,   Math.sqrt(5/8 - Math.sqrt(5)/8)*l +    ((1 - Math.sqrt(5))*Math.sqrt(5/8 - Math.sqrt(5)/8)*r)/4,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*r)],  [((-1 - Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*(-1 + Math.sqrt(5))*r)/    16, Math.sqrt(5/8 - Math.sqrt(5)/8)*l +    (Math.sqrt(5/8 - Math.sqrt(5)/8)*(-1 + Math.sqrt(5))*r)/4,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*r)],  [((-1 - Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*(1 + Math.sqrt(5))*r)/16,   Math.sqrt(5/8 - Math.sqrt(5)/8)*l + (Math.sqrt(5/8 - Math.sqrt(5)/8)*     (1 + Math.sqrt(5))*r)/4, -(Math.sqrt(5/8 - Math.sqrt(5)/8)*r)],  [((-1 - Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*r)/4,   Math.sqrt(5/8 - Math.sqrt(5)/8)*l + Math.sqrt(5/8 - Math.sqrt(5)/8)*r, 0],  [-l - r, 0, 0], [-l - ((1 + Math.sqrt(5))*r)/4, 0,   Math.sqrt(5/8 - Math.sqrt(5)/8)*r], [-l - ((-1 + Math.sqrt(5))*r)/4, 0,   Math.sqrt(5/8 + Math.sqrt(5)/8)*r], [-l - ((1 - Math.sqrt(5))*r)/4, 0,   Math.sqrt(5/8 + Math.sqrt(5)/8)*r], [-l - ((-1 - Math.sqrt(5))*r)/4, 0,   Math.sqrt(5/8 - Math.sqrt(5)/8)*r], [-l + r, 0, 0],  [-l - ((-1 - Math.sqrt(5))*r)/4, 0, -(Math.sqrt(5/8 - Math.sqrt(5)/8)*r)],  [-l - ((1 - Math.sqrt(5))*r)/4, 0, -(Math.sqrt(5/8 + Math.sqrt(5)/8)*r)],  [-l - ((-1 + Math.sqrt(5))*r)/4, 0, -(Math.sqrt(5/8 + Math.sqrt(5)/8)*r)],  [-l - ((1 + Math.sqrt(5))*r)/4, 0, -(Math.sqrt(5/8 - Math.sqrt(5)/8)*r)],  [-l - r, 0, 0], [((-1 - Math.sqrt(5))*l)/4 +    ((-1 - Math.sqrt(5))*r)/4, -(Math.sqrt(5/8 - Math.sqrt(5)/8)*l) -    Math.sqrt(5/8 - Math.sqrt(5)/8)*r, 0],  [((-1 - Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*(1 + Math.sqrt(5))*r)/16,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*l) -    (Math.sqrt(5/8 - Math.sqrt(5)/8)*(1 + Math.sqrt(5))*r)/4,   Math.sqrt(5/8 - Math.sqrt(5)/8)*r],  [((-1 - Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*(-1 + Math.sqrt(5))*r)/    16, -(Math.sqrt(5/8 - Math.sqrt(5)/8)*l) -    (Math.sqrt(5/8 - Math.sqrt(5)/8)*(-1 + Math.sqrt(5))*r)/4,   Math.sqrt(5/8 + Math.sqrt(5)/8)*r],  [((-1 - Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*(1 - Math.sqrt(5))*r)/16,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*l) -    ((1 - Math.sqrt(5))*Math.sqrt(5/8 - Math.sqrt(5)/8)*r)/4,   Math.sqrt(5/8 + Math.sqrt(5)/8)*r],  [((-1 - Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))**2*r)/16,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*l) -    ((-1 - Math.sqrt(5))*Math.sqrt(5/8 - Math.sqrt(5)/8)*r)/4,   Math.sqrt(5/8 - Math.sqrt(5)/8)*r],  [((-1 - Math.sqrt(5))*l)/4 - ((-1 - Math.sqrt(5))*r)/4,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*l) + Math.sqrt(5/8 - Math.sqrt(5)/8)*r, 0],  [((-1 - Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))**2*r)/16,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*l) -    ((-1 - Math.sqrt(5))*Math.sqrt(5/8 - Math.sqrt(5)/8)*r)/4,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*r)],  [((-1 - Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*(1 - Math.sqrt(5))*r)/16,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*l) -    ((1 - Math.sqrt(5))*Math.sqrt(5/8 - Math.sqrt(5)/8)*r)/4,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*r)],  [((-1 - Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*(-1 + Math.sqrt(5))*r)/    16, -(Math.sqrt(5/8 - Math.sqrt(5)/8)*l) -    (Math.sqrt(5/8 - Math.sqrt(5)/8)*(-1 + Math.sqrt(5))*r)/4,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*r)],  [((-1 - Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*(1 + Math.sqrt(5))*r)/16,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*l) -    (Math.sqrt(5/8 - Math.sqrt(5)/8)*(1 + Math.sqrt(5))*r)/4,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*r)],  [((-1 - Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*r)/4,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*l) - Math.sqrt(5/8 - Math.sqrt(5)/8)*r, 0],  [((1 - Math.sqrt(5))*l)/4 + ((1 - Math.sqrt(5))*r)/4,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*l) - Math.sqrt(5/8 + Math.sqrt(5)/8)*r, 0],  [((1 - Math.sqrt(5))*l)/4 + ((1 - Math.sqrt(5))*(1 + Math.sqrt(5))*r)/16,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*l) -    (Math.sqrt(5/8 + Math.sqrt(5)/8)*(1 + Math.sqrt(5))*r)/4,   Math.sqrt(5/8 - Math.sqrt(5)/8)*r],  [((1 - Math.sqrt(5))*l)/4 + ((1 - Math.sqrt(5))*(-1 + Math.sqrt(5))*r)/16,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*l) -    (Math.sqrt(5/8 + Math.sqrt(5)/8)*(-1 + Math.sqrt(5))*r)/4,   Math.sqrt(5/8 + Math.sqrt(5)/8)*r],  [((1 - Math.sqrt(5))*l)/4 + ((1 - Math.sqrt(5))**2*r)/16,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*l) -    ((1 - Math.sqrt(5))*Math.sqrt(5/8 + Math.sqrt(5)/8)*r)/4,   Math.sqrt(5/8 + Math.sqrt(5)/8)*r],  [((1 - Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*(1 - Math.sqrt(5))*r)/16,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*l) -    ((-1 - Math.sqrt(5))*Math.sqrt(5/8 + Math.sqrt(5)/8)*r)/4,   Math.sqrt(5/8 - Math.sqrt(5)/8)*r],  [((1 - Math.sqrt(5))*l)/4 - ((1 - Math.sqrt(5))*r)/4,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*l) + Math.sqrt(5/8 + Math.sqrt(5)/8)*r, 0],  [((1 - Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*(1 - Math.sqrt(5))*r)/16,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*l) -    ((-1 - Math.sqrt(5))*Math.sqrt(5/8 + Math.sqrt(5)/8)*r)/4,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*r)],  [((1 - Math.sqrt(5))*l)/4 + ((1 - Math.sqrt(5))**2*r)/16,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*l) -    ((1 - Math.sqrt(5))*Math.sqrt(5/8 + Math.sqrt(5)/8)*r)/4,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*r)],  [((1 - Math.sqrt(5))*l)/4 + ((1 - Math.sqrt(5))*(-1 + Math.sqrt(5))*r)/16,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*l) -    (Math.sqrt(5/8 + Math.sqrt(5)/8)*(-1 + Math.sqrt(5))*r)/4,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*r)],  [((1 - Math.sqrt(5))*l)/4 + ((1 - Math.sqrt(5))*(1 + Math.sqrt(5))*r)/16,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*l) -    (Math.sqrt(5/8 + Math.sqrt(5)/8)*(1 + Math.sqrt(5))*r)/4,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*r)],  [((1 - Math.sqrt(5))*l)/4 + ((1 - Math.sqrt(5))*r)/4,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*l) - Math.sqrt(5/8 + Math.sqrt(5)/8)*r, 0],  [((-1 + Math.sqrt(5))*l)/4 + ((-1 + Math.sqrt(5))*r)/4,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*l) - Math.sqrt(5/8 + Math.sqrt(5)/8)*r, 0],  [((-1 + Math.sqrt(5))*l)/4 + ((-1 + Math.sqrt(5))*(1 + Math.sqrt(5))*r)/16,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*l) -    (Math.sqrt(5/8 + Math.sqrt(5)/8)*(1 + Math.sqrt(5))*r)/4,   Math.sqrt(5/8 - Math.sqrt(5)/8)*r],  [((-1 + Math.sqrt(5))*l)/4 + ((-1 + Math.sqrt(5))**2*r)/16,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*l) -    (Math.sqrt(5/8 + Math.sqrt(5)/8)*(-1 + Math.sqrt(5))*r)/4,   Math.sqrt(5/8 + Math.sqrt(5)/8)*r],  [((-1 + Math.sqrt(5))*l)/4 + ((1 - Math.sqrt(5))*(-1 + Math.sqrt(5))*r)/16,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*l) -    ((1 - Math.sqrt(5))*Math.sqrt(5/8 + Math.sqrt(5)/8)*r)/4,   Math.sqrt(5/8 + Math.sqrt(5)/8)*r],  [((-1 + Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*(-1 + Math.sqrt(5))*r)/    16, -(Math.sqrt(5/8 + Math.sqrt(5)/8)*l) -    ((-1 - Math.sqrt(5))*Math.sqrt(5/8 + Math.sqrt(5)/8)*r)/4,   Math.sqrt(5/8 - Math.sqrt(5)/8)*r],  [((-1 + Math.sqrt(5))*l)/4 - ((-1 + Math.sqrt(5))*r)/4,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*l) + Math.sqrt(5/8 + Math.sqrt(5)/8)*r, 0],  [((-1 + Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*(-1 + Math.sqrt(5))*r)/    16, -(Math.sqrt(5/8 + Math.sqrt(5)/8)*l) -    ((-1 - Math.sqrt(5))*Math.sqrt(5/8 + Math.sqrt(5)/8)*r)/4,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*r)],  [((-1 + Math.sqrt(5))*l)/4 + ((1 - Math.sqrt(5))*(-1 + Math.sqrt(5))*r)/16,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*l) -    ((1 - Math.sqrt(5))*Math.sqrt(5/8 + Math.sqrt(5)/8)*r)/4,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*r)],  [((-1 + Math.sqrt(5))*l)/4 + ((-1 + Math.sqrt(5))**2*r)/16,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*l) -    (Math.sqrt(5/8 + Math.sqrt(5)/8)*(-1 + Math.sqrt(5))*r)/4,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*r)],  [((-1 + Math.sqrt(5))*l)/4 + ((-1 + Math.sqrt(5))*(1 + Math.sqrt(5))*r)/16,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*l) -    (Math.sqrt(5/8 + Math.sqrt(5)/8)*(1 + Math.sqrt(5))*r)/4,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*r)],  [((-1 + Math.sqrt(5))*l)/4 + ((-1 + Math.sqrt(5))*r)/4,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*l) - Math.sqrt(5/8 + Math.sqrt(5)/8)*r, 0],  [((1 + Math.sqrt(5))*l)/4 + ((1 + Math.sqrt(5))*r)/4,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*l) - Math.sqrt(5/8 - Math.sqrt(5)/8)*r, 0],  [((1 + Math.sqrt(5))*l)/4 + ((1 + Math.sqrt(5))**2*r)/16,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*l) -    (Math.sqrt(5/8 - Math.sqrt(5)/8)*(1 + Math.sqrt(5))*r)/4,   Math.sqrt(5/8 - Math.sqrt(5)/8)*r],  [((1 + Math.sqrt(5))*l)/4 + ((-1 + Math.sqrt(5))*(1 + Math.sqrt(5))*r)/16,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*l) -    (Math.sqrt(5/8 - Math.sqrt(5)/8)*(-1 + Math.sqrt(5))*r)/4,   Math.sqrt(5/8 + Math.sqrt(5)/8)*r],  [((1 + Math.sqrt(5))*l)/4 + ((1 - Math.sqrt(5))*(1 + Math.sqrt(5))*r)/16,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*l) -    ((1 - Math.sqrt(5))*Math.sqrt(5/8 - Math.sqrt(5)/8)*r)/4,   Math.sqrt(5/8 + Math.sqrt(5)/8)*r],  [((1 + Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*(1 + Math.sqrt(5))*r)/16,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*l) -    ((-1 - Math.sqrt(5))*Math.sqrt(5/8 - Math.sqrt(5)/8)*r)/4,   Math.sqrt(5/8 - Math.sqrt(5)/8)*r],  [((1 + Math.sqrt(5))*l)/4 - ((1 + Math.sqrt(5))*r)/4,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*l) + Math.sqrt(5/8 - Math.sqrt(5)/8)*r, 0],  [((1 + Math.sqrt(5))*l)/4 + ((-1 - Math.sqrt(5))*(1 + Math.sqrt(5))*r)/16,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*l) -    ((-1 - Math.sqrt(5))*Math.sqrt(5/8 - Math.sqrt(5)/8)*r)/4,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*r)],  [((1 + Math.sqrt(5))*l)/4 + ((1 - Math.sqrt(5))*(1 + Math.sqrt(5))*r)/16,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*l) -    ((1 - Math.sqrt(5))*Math.sqrt(5/8 - Math.sqrt(5)/8)*r)/4,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*r)],  [((1 + Math.sqrt(5))*l)/4 + ((-1 + Math.sqrt(5))*(1 + Math.sqrt(5))*r)/16,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*l) -    (Math.sqrt(5/8 - Math.sqrt(5)/8)*(-1 + Math.sqrt(5))*r)/4,   -(Math.sqrt(5/8 + Math.sqrt(5)/8)*r)],  [((1 + Math.sqrt(5))*l)/4 + ((1 + Math.sqrt(5))**2*r)/16,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*l) -    (Math.sqrt(5/8 - Math.sqrt(5)/8)*(1 + Math.sqrt(5))*r)/4,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*r)],  [((1 + Math.sqrt(5))*l)/4 + ((1 + Math.sqrt(5))*r)/4,   -(Math.sqrt(5/8 - Math.sqrt(5)/8)*l) - Math.sqrt(5/8 - Math.sqrt(5)/8)*r, 0],  [l + r, 0, 0], [l + ((1 + Math.sqrt(5))*r)/4, 0,   Math.sqrt(5/8 - Math.sqrt(5)/8)*r], [l + ((-1 + Math.sqrt(5))*r)/4, 0,   Math.sqrt(5/8 + Math.sqrt(5)/8)*r], [l + ((1 - Math.sqrt(5))*r)/4, 0,   Math.sqrt(5/8 + Math.sqrt(5)/8)*r], [l + ((-1 - Math.sqrt(5))*r)/4, 0,   Math.sqrt(5/8 - Math.sqrt(5)/8)*r], [l - r, 0, 0],  [l + ((-1 - Math.sqrt(5))*r)/4, 0, -(Math.sqrt(5/8 - Math.sqrt(5)/8)*r)],  [l + ((1 - Math.sqrt(5))*r)/4, 0, -(Math.sqrt(5/8 + Math.sqrt(5)/8)*r)],  [l + ((-1 + Math.sqrt(5))*r)/4, 0, -(Math.sqrt(5/8 + Math.sqrt(5)/8)*r)],  [l + ((1 + Math.sqrt(5))*r)/4, 0, -(Math.sqrt(5/8 - Math.sqrt(5)/8)*r)],  [l + r, 0, 0]]"; 