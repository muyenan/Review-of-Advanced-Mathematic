// Derived from later_chapters_quiz_bank.json and scoped to the docs-style site topics.
globalThis.curatedTopicQuizzes = {
  "11.1": [
    {
      "question": "Parametric equations of a plane curve express x and y as functions of",
      "choices": [
        "x",
        "y",
        "t",
        "r"
      ],
      "correctIndex": 2,
      "hint": "A third variable usually acts as the parameter."
    },
    {
      "question": "To recover a Cartesian equation from parametric equations, we usually",
      "choices": [
        "differentiate twice",
        "eliminate the parameter",
        "take a dot product",
        "convert to polar form"
      ],
      "correctIndex": 1,
      "hint": "Remove t and relate x and y directly."
    },
    {
      "question": "As the parameter t increases, the curve is traced with a specific",
      "choices": [
        "radius",
        "orientation",
        "eccentricity",
        "normal vector"
      ],
      "correctIndex": 1,
      "hint": "Direction of travel matters for parametric curves."
    }
  ],
  "11.2": [
    {
      "question": "For x = x(t), y = y(t), the derivative dy/dx is",
      "choices": [
        "(dx/dt)/(dy/dt)",
        "(dy/dt)/(dx/dt)",
        "dy*dx/dt",
        "undefined for every parametric curve"
      ],
      "correctIndex": 1,
      "hint": "Use the chain rule when dx/dt is nonzero."
    },
    {
      "question": "The area under a parametric curve from t = a to t = b is often computed by",
      "choices": [
        "∫ x(t)y(t) dt",
        "∫ y(t)x'(t) dt",
        "∫ x'(t)/y'(t) dt",
        "∫ √(x^2+y^2) dt"
      ],
      "correctIndex": 1,
      "hint": "Start from A = ∫ y dx."
    },
    {
      "question": "The arc length of x = x(t), y = y(t) from a to b is",
      "choices": [
        "∫_a^b √((x')^2 + (y')^2) dt",
        "∫_a^b (x'+y') dt",
        "∫_a^b x y dt",
        "∫_a^b (dy/dx) dt"
      ],
      "correctIndex": 0,
      "hint": "Use the speed of the planar motion."
    }
  ],
  "11.3": [
    {
      "question": "The conversion from polar to Cartesian coordinates is",
      "choices": [
        "x = r sin θ, y = r cos θ",
        "x = r cos θ, y = r sin θ",
        "x = θ cos r, y = θ sin r",
        "x = r^2 cos θ, y = r^2 sin θ"
      ],
      "correctIndex": 1,
      "hint": "Project the radius onto the axes."
    },
    {
      "question": "In polar coordinates, r^2 equals",
      "choices": [
        "x + y",
        "x^2 + y^2",
        "xy",
        "x/y"
      ],
      "correctIndex": 1,
      "hint": "Square the conversion formulas and add."
    },
    {
      "question": "A point in polar coordinates can also be written as",
      "choices": [
        "(r, θ + 2π) only",
        "(-r, θ + π)",
        "(r, -θ) only",
        "(θ, r)"
      ],
      "correctIndex": 1,
      "hint": "Negative radius reverses direction by π."
    }
  ],
  "11.4": [
    {
      "question": "The polar curve r = a cos θ is a",
      "choices": [
        "circle",
        "line",
        "rose",
        "spiral"
      ],
      "correctIndex": 0,
      "hint": "Convert to Cartesian form and complete the square if needed."
    },
    {
      "question": "The graph r = a cos(3θ) has",
      "choices": [
        "2 petals",
        "3 petals",
        "4 petals",
        "6 petals"
      ],
      "correctIndex": 1,
      "hint": "Odd n gives n petals for rose curves."
    },
    {
      "question": "When graphing a polar equation, a useful first step is to examine",
      "choices": [
        "symmetry and key angle values",
        "its determinant",
        "the Hessian",
        "its derivative with respect to x"
      ],
      "correctIndex": 0,
      "hint": "These quickly reveal the shape."
    }
  ],
  "11.5": [
    {
      "question": "The polar area formula from θ = α to θ = β is",
      "choices": [
        "∫_α^β r dθ",
        "1/2 ∫_α^β r^2 dθ",
        "∫_α^β √(r^2 + r'^2) dθ",
        "2 ∫_α^β r^2 dθ"
      ],
      "correctIndex": 1,
      "hint": "This is the sector-summing formula."
    },
    {
      "question": "The area between outer curve R(θ) and inner curve r(θ) is",
      "choices": [
        "1/2 ∫ (R - r)^2 dθ",
        "1/2 ∫ (R^2 - r^2) dθ",
        "∫ (R + r) dθ",
        "∫ Rr dθ"
      ],
      "correctIndex": 1,
      "hint": "Subtract the inner polar area from the outer."
    },
    {
      "question": "The polar arc length formula for r = r(θ) is",
      "choices": [
        "∫ √(r^2 + (dr/dθ)^2) dθ",
        "∫ r^2 dθ",
        "∫ dr/dθ dθ",
        "∫ (r + θ) dθ"
      ],
      "correctIndex": 0,
      "hint": "It comes from x = r cos θ, y = r sin θ."
    }
  ],
  "11.6": [
    {
      "question": "A conic with eccentricity e < 1 is a",
      "choices": [
        "parabola",
        "ellipse",
        "hyperbola",
        "line"
      ],
      "correctIndex": 1,
      "hint": "Eccentricity classifies conics."
    },
    {
      "question": "A conic with eccentricity e = 1 is a",
      "choices": [
        "circle",
        "ellipse",
        "parabola",
        "hyperbola"
      ],
      "correctIndex": 2,
      "hint": "This is the boundary case."
    },
    {
      "question": "A conic with eccentricity e > 1 is a",
      "choices": [
        "ellipse",
        "circle",
        "hyperbola",
        "parabola"
      ],
      "correctIndex": 2,
      "hint": "The focus-directrix ratio exceeds 1."
    }
  ],
  "11.7": [
    {
      "question": "In the focus-directrix definition of a conic, eccentricity is the ratio of",
      "choices": [
        "area to perimeter",
        "distance to focus over distance to directrix",
        "radius to angle",
        "major axis to minor axis"
      ],
      "correctIndex": 1,
      "hint": "That ratio is constant for points on the conic."
    },
    {
      "question": "A standard polar form for a conic with focus at the pole is",
      "choices": [
        "r = ed/(1 ± e cos θ)",
        "r = a cos nθ",
        "r = aθ",
        "r = a(1 + cos θ)"
      ],
      "correctIndex": 0,
      "hint": "A sine version is also possible depending on the directrix."
    },
    {
      "question": "The equation r = 2/(1 - cos θ) describes a",
      "choices": [
        "parabola",
        "ellipse",
        "rose curve",
        "circle"
      ],
      "correctIndex": 0,
      "hint": "Compare with the standard polar conic form and note e = 1."
    }
  ],
  "12.1": [
    {
      "question": "A point in three-dimensional space is written as",
      "choices": [
        "(x, y)",
        "(x, y, z)",
        "<x, y>",
        "x + yi + zk"
      ],
      "correctIndex": 1,
      "hint": "Three coordinates are needed in 3D."
    },
    {
      "question": "The distance between (x1, y1, z1) and (x2, y2, z2) is",
      "choices": [
        "√((x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2)",
        "|x2-x1| + |y2-y1| + |z2-z1|",
        "(x2-x1, y2-y1, z2-z1)",
        "√(x1^2+y1^2+z1^2)"
      ],
      "correctIndex": 0,
      "hint": "Use the 3D Pythagorean formula."
    },
    {
      "question": "The equation of a sphere centered at (h, k, l) with radius r is",
      "choices": [
        "(x-h)^2 + (y-k)^2 + (z-l)^2 = r^2",
        "x^2 + y^2 + z^2 = r",
        "(x+h)^2 + (y+k)^2 + (z+l)^2 = r^2",
        "x + y + z = r"
      ],
      "correctIndex": 0,
      "hint": "All points are distance r from the center."
    }
  ],
  "12.2": [
    {
      "question": "The vector from P to Q is",
      "choices": [
        "P + Q",
        "Q - P",
        "P - Q",
        "|Q-P|"
      ],
      "correctIndex": 1,
      "hint": "Terminal minus initial."
    },
    {
      "question": "The magnitude of <a, b, c> is",
      "choices": [
        "a+b+c",
        "√(a^2+b^2+c^2)",
        "a^2+b^2+c^2",
        "abc"
      ],
      "correctIndex": 1,
      "hint": "Use the 3D Pythagorean formula."
    },
    {
      "question": "A unit vector in the direction of v is",
      "choices": [
        "|v|v",
        "v/|v|",
        "v·v",
        "v×v"
      ],
      "correctIndex": 1,
      "hint": "Scale v to length 1."
    }
  ],
  "12.3": [
    {
      "question": "The dot product of u = <u1, u2, u3> and v = <v1, v2, v3> is",
      "choices": [
        "u1v1 + u2v2 + u3v3",
        "u1+u2+u3+v1+v2+v3",
        "<u1v1, u2v2, u3v3>",
        "|u||v|"
      ],
      "correctIndex": 0,
      "hint": "Multiply corresponding components and add."
    },
    {
      "question": "Geometrically, u·v equals",
      "choices": [
        "|u||v|sin θ",
        "|u||v|cos θ",
        "|u×v|",
        "|u|+|v|"
      ],
      "correctIndex": 1,
      "hint": "This formula connects the dot product with angle."
    },
    {
      "question": "The angle between two vectors is commonly found using",
      "choices": [
        "the cross product only",
        "the dot product formula",
        "the distance formula only",
        "the midpoint formula"
      ],
      "correctIndex": 1,
      "hint": "Solve for cos θ."
    }
  ],
  "12.4": [
    {
      "question": "The cross product u × v in R^3 is a",
      "choices": [
        "scalar",
        "vector perpendicular to both u and v",
        "vector parallel to both u and v",
        "matrix"
      ],
      "correctIndex": 1,
      "hint": "It is orthogonal to the original two vectors."
    },
    {
      "question": "The magnitude |u × v| equals",
      "choices": [
        "|u||v|cos θ",
        "|u||v|sin θ",
        "u·v",
        "|u|+|v|"
      ],
      "correctIndex": 1,
      "hint": "This also gives the area of a parallelogram."
    },
    {
      "question": "The area of the parallelogram determined by u and v is",
      "choices": [
        "|u·v|",
        "|u×v|",
        "|u|+|v|",
        "|u-v|"
      ],
      "correctIndex": 1,
      "hint": "Cross product magnitude measures this area."
    }
  ],
  "12.5": [
    {
      "question": "A line through point r0 with direction vector v can be written as",
      "choices": [
        "r = r0 + tv",
        "r = r0 × v",
        "r = tv",
        "r = r0·v"
      ],
      "correctIndex": 0,
      "hint": "Start at r0 and move along v."
    },
    {
      "question": "A plane with normal vector n through point r0 is described by",
      "choices": [
        "n·(r-r0)=0",
        "n×(r-r0)=0",
        "r=r0+tn",
        "|r-r0|=0"
      ],
      "correctIndex": 0,
      "hint": "Vectors in the plane are perpendicular to the normal."
    },
    {
      "question": "The angle between two planes is found from the angle between their",
      "choices": [
        "points of intersection",
        "normal vectors",
        "traces only",
        "midpoints"
      ],
      "correctIndex": 1,
      "hint": "Reduce the problem to vectors."
    }
  ],
  "12.6": [
    {
      "question": "If one variable is missing from a quadratic surface equation, the surface is usually a",
      "choices": [
        "sphere",
        "cylinder",
        "cone",
        "plane"
      ],
      "correctIndex": 1,
      "hint": "The missing variable gives a ruling direction."
    },
    {
      "question": "The equation z = x^2 + y^2 describes an",
      "choices": [
        "elliptic paraboloid",
        "hyperbolic paraboloid",
        "cone",
        "ellipsoid"
      ],
      "correctIndex": 0,
      "hint": "It opens upward."
    },
    {
      "question": "The equation x^2/a^2 + y^2/b^2 + z^2/c^2 = 1 describes an",
      "choices": [
        "ellipsoid",
        "hyperboloid of one sheet",
        "hyperbolic paraboloid",
        "cylinder"
      ],
      "correctIndex": 0,
      "hint": "All squared terms have the same sign."
    }
  ],
  "13.1": [
    {
      "question": "A vector-valued function in space is commonly written as",
      "choices": [
        "x+y+z",
        "<x(t), y(t), z(t)>",
        "xyz",
        "x/y/z"
      ],
      "correctIndex": 1,
      "hint": "Each coordinate depends on the parameter."
    },
    {
      "question": "The tangent vector to a space curve r(t) is",
      "choices": [
        "r(t)",
        "r'(t)",
        "r''(t)",
        "|r(t)|"
      ],
      "correctIndex": 1,
      "hint": "Differentiate the position vector."
    },
    {
      "question": "The unit tangent vector T is",
      "choices": [
        "r/|r|",
        "r'/|r'|",
        "r''/|r''|",
        "v/|a|"
      ],
      "correctIndex": 1,
      "hint": "Normalize the tangent vector."
    }
  ],
  "13.2": [
    {
      "question": "The integral of a vector function is computed",
      "choices": [
        "by integrating only the first component",
        "componentwise",
        "by taking a cross product first",
        "only numerically"
      ],
      "correctIndex": 1,
      "hint": "Integrate each component separately."
    },
    {
      "question": "If velocity v(t) is known, position r(t) is found by",
      "choices": [
        "differentiating v(t)",
        "integrating v(t) and using an initial condition",
        "taking v×v",
        "taking |v|"
      ],
      "correctIndex": 1,
      "hint": "Antidifferentiate and determine the constant vector."
    },
    {
      "question": "In three-dimensional projectile motion without air resistance, acceleration is often",
      "choices": [
        "<0,0,0>",
        "<0,-g,0>",
        "<0,0,-g>",
        "<g,0,0>"
      ],
      "correctIndex": 2,
      "hint": "Gravity acts downward along the vertical axis."
    }
  ],
  "13.3": [
    {
      "question": "The arc length of a smooth space curve r(t) from a to b is",
      "choices": [
        "∫_a^b |r(t)| dt",
        "∫_a^b |r'(t)| dt",
        "∫_a^b |r''(t)| dt",
        "∫_a^b T(t) dt"
      ],
      "correctIndex": 1,
      "hint": "Length accumulates via speed."
    },
    {
      "question": "A unit-speed parametrization satisfies",
      "choices": [
        "|r(t)|=1",
        "|r'(t)|=1",
        "|r''(t)|=1",
        "|T'(t)|=1"
      ],
      "correctIndex": 1,
      "hint": "Speed is constantly 1."
    },
    {
      "question": "The arc length function s(t) measures",
      "choices": [
        "displacement only",
        "distance traveled along the curve",
        "the angle made by the curve",
        "the curvature only"
      ],
      "correctIndex": 1,
      "hint": "It accumulates speed from a starting time."
    }
  ],
  "13.4": [
    {
      "question": "Curvature κ can be defined by",
      "choices": [
        "|dT/ds|",
        "|r'|",
        "|r''|",
        "|dN/ds|"
      ],
      "correctIndex": 0,
      "hint": "It measures how fast the unit tangent changes with respect to arc length."
    },
    {
      "question": "The principal unit normal vector N is",
      "choices": [
        "T/|T|",
        "T'/|T'| when T' ≠ 0",
        "r''/|r''| always",
        "B×T"
      ],
      "correctIndex": 1,
      "hint": "Normalize the change in the unit tangent."
    },
    {
      "question": "The binormal vector B is defined by",
      "choices": [
        "N×T",
        "T×N",
        "T·N",
        "r×r'"
      ],
      "correctIndex": 1,
      "hint": "Order matters here."
    }
  ],
  "13.5": [
    {
      "question": "Acceleration can be decomposed as",
      "choices": [
        "a = a_T T + a_N N",
        "a = a_T N + a_N B",
        "a = vT + κN",
        "a = T + N + B"
      ],
      "correctIndex": 0,
      "hint": "Use tangential and normal components."
    },
    {
      "question": "The tangential component of acceleration is",
      "choices": [
        "a_T = κv^2",
        "a_T = dv/dt",
        "a_T = |a|",
        "a_T = dT/dt"
      ],
      "correctIndex": 1,
      "hint": "Tangential acceleration changes speed."
    },
    {
      "question": "The normal component of acceleration is",
      "choices": [
        "a_N = dv/dt",
        "a_N = κv^2",
        "a_N = |v|",
        "a_N = 1/κ"
      ],
      "correctIndex": 1,
      "hint": "Normal acceleration changes direction."
    }
  ],
  "13.6": [
    {
      "question": "In polar coordinates, the position vector can be written as",
      "choices": [
        "r e_r",
        "θ e_θ",
        "r e_θ",
        "θ e_r"
      ],
      "correctIndex": 0,
      "hint": "Radius times the radial unit vector."
    },
    {
      "question": "In polar coordinates, velocity is",
      "choices": [
        "ṙ e_r + rθ̇ e_θ",
        "r̈ e_r + θ̈ e_θ",
        "θ̇ e_r + r e_θ",
        "rθ e_r"
      ],
      "correctIndex": 0,
      "hint": "There is a radial term and an angular term."
    },
    {
      "question": "In polar coordinates, acceleration is",
      "choices": [
        "(r̈-rθ̇^2)e_r + (rθ̈+2ṙθ̇)e_θ",
        "(r̈+rθ̇^2)e_r + (rθ̈-2ṙθ̇)e_θ",
        "ṙe_r + rθ̇e_θ",
        "r̈e_r + θ̈e_θ"
      ],
      "correctIndex": 0,
      "hint": "Remember the centripetal and Coriolis-like terms."
    }
  ],
  "14.1": [
    {
      "question": "The graph of a function z = f(x, y) is typically a",
      "choices": [
        "curve in the plane",
        "surface in space",
        "line in space",
        "vector field"
      ],
      "correctIndex": 1,
      "hint": "One output over a 2D domain makes a surface."
    },
    {
      "question": "A level curve of f(x, y) is obtained by setting",
      "choices": [
        "x = c",
        "y = c",
        "f(x, y) = c",
        "∂f/∂x = c"
      ],
      "correctIndex": 2,
      "hint": "Keep the function value fixed."
    },
    {
      "question": "A function of two variables may have a domain determined by",
      "choices": [
        "algebraic restrictions like square roots and denominators",
        "only x-values",
        "only y-values",
        "only continuity"
      ],
      "correctIndex": 0,
      "hint": "Domain rules still matter."
    }
  ],
  "14.2": [
    {
      "question": "A multivariable limit exists only if",
      "choices": [
        "it has the same value along every path",
        "x approaches first, then y",
        "the function is a polynomial",
        "all partial derivatives exist"
      ],
      "correctIndex": 0,
      "hint": "Different path limits force nonexistence."
    },
    {
      "question": "If two different paths toward a point give different limit values, then the limit",
      "choices": [
        "exists and equals 0",
        "exists and equals the average",
        "does not exist",
        "must be infinite"
      ],
      "correctIndex": 2,
      "hint": "Path dependence destroys the limit."
    },
    {
      "question": "Continuity of f at a point means",
      "choices": [
        "f is differentiable there",
        "the limit exists and equals the function value",
        "all second partials exist",
        "the gradient is nonzero"
      ],
      "correctIndex": 1,
      "hint": "Same idea as one-variable continuity."
    }
  ],
  "14.3": [
    {
      "question": "The partial derivative f_x is computed by",
      "choices": [
        "holding x constant",
        "holding y constant",
        "holding all other variables constant and differentiating with respect to x",
        "taking a dot product"
      ],
      "correctIndex": 2,
      "hint": "Treat the other variables as constants."
    },
    {
      "question": "The mixed partial derivative first with respect to x and then y is denoted by",
      "choices": [
        "f_yx",
        "f_xy",
        "f_xxy",
        "f_yy"
      ],
      "correctIndex": 1,
      "hint": "Read the subscripts from left to right as derivatives are applied."
    },
    {
      "question": "The partial derivatives f_x and f_y represent slopes of the",
      "choices": [
        "normal vectors",
        "coordinate traces",
        "gradient only",
        "Hessian"
      ],
      "correctIndex": 1,
      "hint": "Each is the slope in one coordinate direction."
    }
  ],
  "14.4": [
    {
      "question": "If z = f(x, y) and x, y depend on t, then dz/dt is",
      "choices": [
        "f_x + f_y",
        "f_x dx/dt + f_y dy/dt",
        "dx/dt + dy/dt",
        "f_t only"
      ],
      "correctIndex": 1,
      "hint": "This is the multivariable chain rule."
    },
    {
      "question": "The total differential of z = f(x, y) is",
      "choices": [
        "dz = f_x dx + f_y dy",
        "dz = dx + dy",
        "dz = f_x + f_y",
        "dz = f_xx dx + f_yy dy"
      ],
      "correctIndex": 0,
      "hint": "This is the linear part of the change."
    },
    {
      "question": "The chain rule for z = f(x(u,v), y(u,v)) expresses ∂z/∂u as",
      "choices": [
        "f_x x_u + f_y y_u",
        "f_u + f_v",
        "x_u + y_u",
        "f_x + f_y"
      ],
      "correctIndex": 0,
      "hint": "Differentiate through the intermediate variables."
    }
  ],
  "14.5": [
    {
      "question": "The gradient of f(x, y) is",
      "choices": [
        "<f, x, y>",
        "<f_x, f_y>",
        "<x, y>",
        "<f_xx, f_yy>"
      ],
      "correctIndex": 1,
      "hint": "Collect the first partial derivatives."
    },
    {
      "question": "The directional derivative of f in the unit direction u is",
      "choices": [
        "u × ∇f",
        "∇f · u",
        "|∇f|u",
        "f_x + f_y"
      ],
      "correctIndex": 1,
      "hint": "Take the dot product with a unit direction."
    },
    {
      "question": "The direction of maximum increase of f is the direction of the",
      "choices": [
        "unit normal to the xy-plane",
        "gradient vector",
        "cross product",
        "level curve"
      ],
      "correctIndex": 1,
      "hint": "Steepest ascent points along ∇f."
    }
  ],
  "14.6": [
    {
      "question": "The tangent plane to z = f(x, y) at (a, b) is",
      "choices": [
        "z = f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)",
        "z = f_xx + f_yy",
        "z = f(a,b)",
        "z = ax + by"
      ],
      "correctIndex": 0,
      "hint": "It uses first partial derivatives."
    },
    {
      "question": "For z = f(x, y), the differential dz is approximately",
      "choices": [
        "f_x dx + f_y dy",
        "dx dy",
        "f_xx dx + f_yy dy",
        "x dx + y dy"
      ],
      "correctIndex": 0,
      "hint": "Use the linear part."
    },
    {
      "question": "The tangent plane to the level surface F(x, y, z)=c has normal vector",
      "choices": [
        "<1,1,1>",
        "∇F",
        "r'(t)",
        "T"
      ],
      "correctIndex": 1,
      "hint": "Gradient is normal to a level surface."
    }
  ],
  "14.7": [
    {
      "question": "A critical point of f(x, y) occurs where",
      "choices": [
        "f_x = f_y = 0 or one/both partials fail to exist",
        "f = 0 only",
        "x = y",
        "the gradient is maximal"
      ],
      "correctIndex": 0,
      "hint": "Interior candidates for local extrema start here."
    },
    {
      "question": "For the second derivative test, D is",
      "choices": [
        "f_x + f_y",
        "f_xx f_yy - (f_xy)^2",
        "f_xx + f_yy",
        "f_xy - f_yx"
      ],
      "correctIndex": 1,
      "hint": "This determinant is built from second partials."
    },
    {
      "question": "If D < 0 at a critical point, then the point is a",
      "choices": [
        "local maximum",
        "local minimum",
        "saddle point",
        "center"
      ],
      "correctIndex": 2,
      "hint": "Curvature changes sign in different directions."
    }
  ],
  "14.8": [
    {
      "question": "Lagrange multipliers are used to find extrema of f subject to",
      "choices": [
        "no conditions",
        "a constraint g(x,y,...) = c",
        "only linear functions",
        "only unconstrained problems"
      ],
      "correctIndex": 1,
      "hint": "They handle constrained optimization."
    },
    {
      "question": "The basic Lagrange condition for one constraint is",
      "choices": [
        "∇f = λ∇g",
        "∇f = ∇g",
        "f = λg",
        "∇f · ∇g = 0"
      ],
      "correctIndex": 0,
      "hint": "At an extremum on the constraint, the gradients are parallel."
    },
    {
      "question": "Geometrically, the Lagrange condition means the level set of f is",
      "choices": [
        "parallel to the coordinate axes",
        "tangent to the constraint set",
        "orthogonal to the constraint set",
        "equal to the constraint set"
      ],
      "correctIndex": 1,
      "hint": "At the optimum, the two level sets just touch."
    }
  ],
  "14.9": [
    {
      "question": "The second-order Taylor polynomial of f near (a, b) contains",
      "choices": [
        "only first derivatives",
        "constant, linear, and quadratic terms",
        "only quadratic terms",
        "only mixed partials"
      ],
      "correctIndex": 1,
      "hint": "It keeps terms through degree 2."
    },
    {
      "question": "In the second-order Taylor polynomial for two variables, the xy term uses",
      "choices": [
        "f_xy(x-a)(y-b)",
        "2f_xy(x-a)(y-b)",
        "f_x + f_y",
        "f_xx f_yy"
      ],
      "correctIndex": 1,
      "hint": "Because of the 1/2 factor and symmetry."
    },
    {
      "question": "Taylor approximations are generally most accurate",
      "choices": [
        "far from the center",
        "near the expansion point",
        "only on the boundary",
        "when gradients vanish"
      ],
      "correctIndex": 1,
      "hint": "They are local approximations."
    }
  ],
  "14.10": [
    {
      "question": "If F(x, y, z) = 0 defines z implicitly as a function of x and y, then z_x is often found by",
      "choices": [
        "Lagrange multipliers",
        "implicit differentiation",
        "polar substitution",
        "a cross product"
      ],
      "correctIndex": 1,
      "hint": "Differentiate the constraint while treating z as dependent."
    },
    {
      "question": "For F(x, y, z) = 0 with F_z ≠ 0, the implicit partial derivative z_x is",
      "choices": [
        "F_x/F_z",
        "-F_x/F_z",
        "-F_z/F_x",
        "F_z/F_x"
      ],
      "correctIndex": 1,
      "hint": "Move the z_x term to the other side."
    },
    {
      "question": "For constrained variables, total derivatives usually include",
      "choices": [
        "only explicit derivative terms",
        "chain-rule contributions from dependent variables",
        "no partial derivatives",
        "cross products"
      ],
      "correctIndex": 1,
      "hint": "Dependencies propagate through the chain rule."
    }
  ]
};
