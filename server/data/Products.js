const products = [
  {
    name: "Laptop Lenovo Ideapad 1(81VT006FVN)",
    image: "/images/lenovo4.png",
    description:
      "11IGL05 N5030/4GB/256GB/Win11 ",
    price: 629,
    countInStock: 7,
    category: "LENOVO",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop Lenovo Ideapad 3 15ITL6(82H801NEVN)",
    image: "/images/lenovo3.png",
    description:
      "i3 1115G4/8GB/512GB/Win11",
    price: 329,
    countInStock: 7,
    category: "LENOVO",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop Lenovo IdeaPad 5 Pro 16IHU6(82L9004XVN)",
    image: "/images/lenovo2.png",
    description:
      "i5 11300H/16GB/512GB/2GB MX450/120Hz/Win11",
    price: 529,
    countInStock: 7,
    category: "LENOVO",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop Lenovo Yoga Duet 7 13ITL6(82MA003UVN)",
    image: "/images/lenovo1.png",
    description:
      "i7 1165G7/16GB/1TB SSD/Touch/Pen/Win10",
    price: 1129,
    countInStock: 7,
    category: "LENOVO",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop HP 240 G8(617K6PA)",
    image: "/images/hp4.png",
    description:
      "i3 1125G4/4GB/256GB/Win11",
    price: 329,
    countInStock: 7,
    category: "HP",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop HP Pavilion 14 dv0516TU(46L88PA) ",
    image: "/images/hp3.png",
    description:
      "i3 1125G4/4GB/256GB/Win11",
    price: 629,
    countInStock: 7,
    category: "HP",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop HP Envy 13 ba1535TU(4U6M4PA)",
    image: "/images/hp2.png",
    description:
      "i7 1165G7/8GB/512GB/Win11",
    price: 629,
    countInStock: 7,
    category: "HP",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop HP VICTUS 16 d0292TX(5Z9R3PA)",
    image: "/images/hp1.png",
    description:
      "i5 11400H/8GB/512GB/4GB RTX3050Ti/144Hz/Win11",
    price: 679,
    countInStock: 4,
    category: "HP",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop Dell Gaming Alienware m15 R6(P109F001DBL)",
    image: "/images/dell4.png",
    description:
      "i7 11800H/32GB/1TB SSD/6GB RTX3060/165Hz/Office H&S/Win11",
    price: 1029,
    countInStock: 7,
    category: "DELL",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop Dell Vostro 3400(V4I7015W1)",
    image: "/images/dell3.png",
    description:
      "i7 1165G7/8GB/512GB/2GB MX330/Office H&S/Win11",
    price: 929,
    countInStock: 7,
    category: "DELL",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop Dell Gaming G15 5515 R7(70266674)",
    image: "/images/dell2.png",
    description:
      "R7 5800H/8GB/512GB/4GB RTX3050/120Hz/Office H&S/Win11",
    price: 729,
    countInStock: 7,
    category: "DELL",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop Dell XPS 13 Plus 9320(5CG56)",
    image: "/images/dell1.png",
    description:
      "i7 1260P/16GB/512GB/Touch/Cáp/OfficeHS/Win11",
    price: 939,
    countInStock: 7,
    category: "DELL",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop Acer Nitro 5 Gaming AN515 45 R6EV(NH.QBMSV.006)",
    image: "/images/acer4.png",
    description:
      "R5 5600H/8GB/512GB/144Hz/4GB GTX1650/Win11",
    price: 779,
    countInStock: 7,
    category: "ACER",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop Acer Nitro 5 Gaming AN515 57 553E(NH.QENSV.006)",
    image: "/images/acer3.png",
    description:
      "i5 11400H/8GB/512GB/4GB RTX3050/144Hz/Win11",
    price: 579,
    countInStock: 7,
    category: "ACER",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop Acer Swift X SFX16 51G 516Q(NX.AYKSV.002)",
    image: "/images/acer2.png",
    description:
      "i5 11320H/16GB/512GB/4GB RTX3050/Win11",
    price: 559,
    countInStock: 7,
    category: "ACER",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop Acer Nitro 5 Tiger AN515 58 773Y(NH.QFKSV.001)",
    image: "/images/acer1.png",
    description:
      "i7 12700H/8GB/512GB/4GB RTX3050Ti/144Hz/Win11",
    price: 899,
    countInStock: 7,
    category: "ACER",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop Asus TUF Gaming FA507RC R7(HN051W) ",
    image: "/images/asus4.png",
    description:
      "R7 6800H/8GB/512GB/4GB RTX3050/144Hz/Win11",
    price: 869,
    countInStock: 3,
    category: "ASUS",
    rating: 4,
    numReviews: 2,
  },
  {
    name: "Laptop Asus TUF Gaming FA507RC R7(HN051W) ",
    image: "/images/asus3.png",
    description:
      "R7 6800H/8GB/512GB/4GB RTX3050/144Hz/Win11",
    price: 869,
    countInStock: 3,
    category: "ASUS",
    rating: 4,
    numReviews: 1,
  },
  {
    name: "Laptop Asus ROG Strix Gaming G513R R7(HN038W)",
    image: "/images/asus2.png",
    description:
      "R7 6800H/8GB/512GB/4GB RTX3050/144Hz/Win11",
    price: 999,
    countInStock: 10,
    category: "ASUS",
    rating: 2.5,
    numReviews: 2,
  },
  {
    name: "Laptop Asus TUF Gaming FX506HC(HN144W)",
    image: "/images/asus1.png",
    description:
      "i5 11400H/8GB/512GB/4GB RTX3050/144Hz/Win11",
    price: 729,
    countInStock: 0,
    category: "ASUS",
    rating: 3.5,
    numReviews: 3,
  },
  {
    name: "Laptop MSI Gaming GE66 Raider 11UG(258VN) ",
    image: "/images/msi4.png",
    description:
      "i7 11800H/16GB/2TB SSD/8GB RTX3070/360Hz/Balo/Chuột/Win10",
    price: 929,
    countInStock: 10,
    category: "MSI",
    rating: 5,
    numReviews: 2,
  },
  {
    name: "Laptop MSI Gaming GS66 Stealth 11UG(219VN)",
    image: "/images/msi3.png",
    description:
      "i7 11800H/32GB/2TB SSD/8GB RTX3070 Max-Q/360Hz/Balo/Chuột/Win10",
    price: 849,
    countInStock: 10,
    category: "MSI",
    rating: 5,
    numReviews: 1,
  },
  {
    name: "Laptop MSI Gaming GE66 Raider 11UH(259VN)",
    image: "/images/msi2.png",
    description:
      "i7 11800H/32GB/2TB SSD/16GB RTX3080/240Hz/Balo/Chuột/Win10",
    price: 949,
    countInStock: 7,
    category: "MSI",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop MSI Creator Z16P B12UGST(050VN)",
    image: "/images/msi1.png",
    description:
      "i7 12700H/32GB/2TB SSD/8GB RTX3070Ti Max-Q/165Hz/Túi/Chuột/Win11",
    price: 899,
    countInStock: 10,
    category: "MSI",
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Laptop Lenovo Ideapad 1(81VT006FVN)",
    image: "/images/lenovo4.png",
    description:
      "11IGL05 N5030/4GB/256GB/Win11 ",
    price: 629,
    countInStock: 7,
    category: "LENOVO",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop Lenovo Ideapad 3 15ITL6(82H801NEVN)",
    image: "/images/lenovo3.png",
    description:
      "i3 1115G4/8GB/512GB/Win11",
    price: 329,
    countInStock: 7,
    category: "LENOVO",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop Lenovo IdeaPad 5 Pro 16IHU6(82L9004XVN)",
    image: "/images/lenovo2.png",
    description:
      "i5 11300H/16GB/512GB/2GB MX450/120Hz/Win11",
    price: 529,
    countInStock: 7,
    category: "LENOVO",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop Lenovo Yoga Duet 7 13ITL6(82MA003UVN)",
    image: "/images/lenovo1.png",
    description:
      "i7 1165G7/16GB/1TB SSD/Touch/Pen/Win10",
    price: 1129,
    countInStock: 7,
    category: "LENOVO",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop HP 240 G8(617K6PA)",
    image: "/images/hp4.png",
    description:
      "i3 1125G4/4GB/256GB/Win11",
    price: 329,
    countInStock: 7,
    category: "HP",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop HP Pavilion 14 dv0516TU(46L88PA) ",
    image: "/images/hp3.png",
    description:
      "i3 1125G4/4GB/256GB/Win11",
    price: 629,
    countInStock: 7,
    category: "HP",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop HP Envy 13 ba1535TU(4U6M4PA)",
    image: "/images/hp2.png",
    description:
      "i7 1165G7/8GB/512GB/Win11",
    price: 629,
    countInStock: 7,
    category: "HP",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop HP VICTUS 16 d0292TX(5Z9R3PA)",
    image: "/images/hp1.png",
    description:
      "i5 11400H/8GB/512GB/4GB RTX3050Ti/144Hz/Win11",
    price: 679,
    countInStock: 4,
    category: "HP",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop Dell Gaming Alienware m15 R6(P109F001DBL)",
    image: "/images/dell4.png",
    description:
      "i7 11800H/32GB/1TB SSD/6GB RTX3060/165Hz/Office H&S/Win11",
    price: 1029,
    countInStock: 7,
    category: "DELL",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop Dell Vostro 3400(V4I7015W1)",
    image: "/images/dell3.png",
    description:
      "i7 1165G7/8GB/512GB/2GB MX330/Office H&S/Win11",
    price: 929,
    countInStock: 7,
    category: "DELL",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop Dell Gaming G15 5515 R7(70266674)",
    image: "/images/dell2.png",
    description:
      "R7 5800H/8GB/512GB/4GB RTX3050/120Hz/Office H&S/Win11",
    price: 729,
    countInStock: 7,
    category: "DELL",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop Dell XPS 13 Plus 9320(5CG56)",
    image: "/images/dell1.png",
    description:
      "i7 1260P/16GB/512GB/Touch/Cáp/OfficeHS/Win11",
    price: 939,
    countInStock: 7,
    category: "DELL",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop Acer Nitro 5 Gaming AN515 45 R6EV(NH.QBMSV.006)",
    image: "/images/acer4.png",
    description:
      "R5 5600H/8GB/512GB/144Hz/4GB GTX1650/Win11",
    price: 779,
    countInStock: 7,
    category: "ACER",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop Acer Nitro 5 Gaming AN515 57 553E(NH.QENSV.006)",
    image: "/images/acer3.png",
    description:
      "i5 11400H/8GB/512GB/4GB RTX3050/144Hz/Win11",
    price: 579,
    countInStock: 7,
    category: "ACER",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop Acer Swift X SFX16 51G 516Q(NX.AYKSV.002)",
    image: "/images/acer2.png",
    description:
      "i5 11320H/16GB/512GB/4GB RTX3050/Win11",
    price: 559,
    countInStock: 7,
    category: "ACER",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop Acer Nitro 5 Tiger AN515 58 773Y(NH.QFKSV.001)",
    image: "/images/acer1.png",
    description:
      "i7 12700H/8GB/512GB/4GB RTX3050Ti/144Hz/Win11",
    price: 899,
    countInStock: 7,
    category: "ACER",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop Asus TUF Gaming FA507RC R7(HN051W) ",
    image: "/images/asus4.png",
    description:
      "R7 6800H/8GB/512GB/4GB RTX3050/144Hz/Win11",
    price: 869,
    countInStock: 3,
    category: "ASUS",
    rating: 4,
    numReviews: 2,
  },
  {
    name: "Laptop Asus TUF Gaming FA507RC R7(HN051W) ",
    image: "/images/asus3.png",
    description:
      "R7 6800H/8GB/512GB/4GB RTX3050/144Hz/Win11",
    price: 869,
    countInStock: 3,
    category: "ASUS",
    rating: 4,
    numReviews: 1,
  },
  {
    name: "Laptop Asus ROG Strix Gaming G513R R7(HN038W)",
    image: "/images/asus2.png",
    description:
      "R7 6800H/8GB/512GB/4GB RTX3050/144Hz/Win11",
    price: 999,
    countInStock: 10,
    category: "ASUS",
    rating: 2.5,
    numReviews: 2,
  },
  {
    name: "Laptop Asus TUF Gaming FX506HC(HN144W)",
    image: "/images/asus1.png",
    description:
      "i5 11400H/8GB/512GB/4GB RTX3050/144Hz/Win11",
    price: 729,
    countInStock: 0,
    category: "ASUS",
    rating: 3.5,
    numReviews: 3,
  },
  {
    name: "Laptop MSI Gaming GE66 Raider 11UG(258VN) ",
    image: "/images/msi4.png",
    description:
      "i7 11800H/16GB/2TB SSD/8GB RTX3070/360Hz/Balo/Chuột/Win10",
    price: 929,
    countInStock: 10,
    category: "MSI",
    rating: 5,
    numReviews: 2,
  },
  {
    name: "Laptop MSI Gaming GS66 Stealth 11UG(219VN)",
    image: "/images/msi3.png",
    description:
      "i7 11800H/32GB/2TB SSD/8GB RTX3070 Max-Q/360Hz/Balo/Chuột/Win10",
    price: 849,
    countInStock: 10,
    category: "MSI",
    rating: 5,
    numReviews: 1,
  },
  {
    name: "Laptop MSI Gaming GE66 Raider 11UH(259VN)",
    image: "/images/msi2.png",
    description:
      "i7 11800H/32GB/2TB SSD/16GB RTX3080/240Hz/Balo/Chuột/Win10",
    price: 949,
    countInStock: 7,
    category: "MSI",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Laptop MSI Creator Z16P B12UGST(050VN)",
    image: "/images/msi1.png",
    description:
      "i7 12700H/32GB/2TB SSD/8GB RTX3070Ti Max-Q/165Hz/Túi/Chuột/Win11",
    price: 899,
    countInStock: 10,
    category: "MSI",
    rating: 0,
    numReviews: 0,
  },
  
];

export default products;

