import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  await prisma.tripTip.deleteMany();
  await prisma.tripExclude.deleteMany();
  await prisma.tripInclude.deleteMany();
  await prisma.hotelInfo.deleteMany();
  await prisma.flightInfo.deleteMany();
  await prisma.destination.deleteMany();
  await prisma.itineraryTranslation.deleteMany();
  await prisma.itinerary.deleteMany();
  await prisma.tripTranslation.deleteMany();
  await prisma.trip.deleteMany();

  // PAKET 1
  const trip1 = await prisma.trip.create({
    data: {
      slug: "sumba-essence",
      durationDays: 3,
      durationNights: 2,
      price: 2200000,
      imageUrl: "/images/trip-essence.jpg",
      maxPax: 12,
      minPax: 2,
      featured: true,
      translations: {
        create: [
          {
            locale: "en",
            name: "Sumba Signature Escape",
            subtitle: "A Taste of Sumba in 3 Days",
            description:
              "This package is designed for travelers who want to experience the beauty of Sumba in a short yet meaningful journey. You will explore the highlights of West to East Sumba, from dramatic cliffside beaches and crystal-clear lagoons to authentic traditional villages. Combined with sunrise and sunset experiences at the island’s best spots, this trip offers a perfect short escape filled with unforgettable moments.",
          },
          {
            locale: "id",
            name: "Sumba Signature Escape",
            subtitle: "Cita Rasa Sumba dalam 3 Hari",
            description:
              "Paket ini dirancang untuk Anda yang ingin menikmati keindahan Sumba dalam waktu singkat namun tetap mendapatkan pengalaman yang lengkap dan berkesan. Dalam perjalanan ini, Anda akan diajak menjelajahi sisi terbaik Sumba Barat hingga Sumba Timur, mulai dari pantai eksotis dengan tebing karang yang dramatis, laguna air asin yang jernih, hingga desa adat yang masih menjaga tradisi leluhur. Dipadukan dengan pengalaman berburu sunrise dan sunset di spot-spot terbaik, perjalanan ini menjadi pilihan ideal untuk short getaway yang penuh momen indah.",
          },
        ],
      },
      itineraries: {
        create: [
          {
            dayNumber: 1,
            imageUrl: "/images/dest-weekuri.jpg",
            translations: {
              create: [
                {
                  locale: "en",
                  title: "West Sumba Exploration",
                  description:
                    "Upon arrival at Tambolaka Airport, you will be greeted by our team and transferred to Ella Hotel for check-in. After lunch, continue to Mandorak Beach, known for its dramatic cliffs and pristine atmosphere. Next, visit Weekuri Lagoon, a crystal-clear saltwater lagoon perfect for relaxing. Continue to Ratenggaro Traditional Village to see the iconic high-roof houses. Enjoy dinner before returning to the hotel.",
                  meals: "Lunch, Dinner",
                  activities:
                    "Airport pickup, Weekuri Lake, Ratenggaro Village, Mandorak Beach",
                },
                {
                  locale: "id",
                  title: "Eksplorasi Sumba Barat",
                  description:
                    "Setibanya di Bandara Tambolaka, Anda akan dijemput dan memulai perjalanan menuju Ella Hotel untuk proses check-in. Setelah menikmati makan siang, perjalanan dilanjutkan menuju Pantai Mandorak yang terkenal dengan tebing karangnya yang eksotis dan suasana yang masih alami. Selanjutnya, Anda akan mengunjungi Danau Weekuri, sebuah laguna air asin dengan air yang jernih dan menenangkan. Perjalanan dilanjutkan ke Kampung Adat Ratenggaro untuk melihat rumah adat khas Sumba yang menjulang tinggi. Hari ditutup dengan makan malam sebelum kembali ke hotel.",
                  meals: "Makan Siang, Makan Malam",
                  activities:
                    "Antar jemput bandara, Danau Weekuri, Desa Ratenggaro, Pantai Mandorak",
                },
              ],
            },
            destinations: {
              create: [
                {
                  name: "Mandorak Beach",
                  imageUrl: "/images/dest-mandorak.jpg",
                  order: 1,
                },
                {
                  name: "Weekuri Lake",
                  imageUrl: "/images/dest-weekuri.jpg",
                  order: 2,
                },
                {
                  name: "Ratenggaro Village",
                  imageUrl: "/images/dest-ratenggaro.jpg",
                  order: 3,
                },
              ],
            },
          },
          {
            dayNumber: 2,
            imageUrl: "/images/dest-hiliwuku.jpg",
            translations: {
              create: [
                {
                  locale: "en",
                  title: "Nature & East Sumba Journey",
                  description:
                    "After breakfast, visit Hiliwuku Hill for scenic views of Sumba’s landscape. Continue to Weimarang Waterfall for a refreshing experience. After lunch, head to Walakiri Beach to enjoy a stunning sunset with iconic mangrove trees. Dinner and check-in at Padadita Hotel.",
                  activities:
                    "Hiliwuku Hill, Weimarang Waterfall, Walakiri Beach",
                },
                {
                  locale: "id",
                  title: "Perjalanan Alam & Sumba Timur",
                  description:
                    "Setelah sarapan, perjalanan dimulai menuju Bukit Hiliwuku untuk menikmati panorama alam Sumba yang luas. Kemudian Anda akan mengunjungi Air Terjun Weimarang dan menikmati kesegaran airnya. Setelah makan siang, perjalanan dilanjutkan menuju Pantai Walakiri untuk menikmati keindahan sunset dengan pohon mangrove yang ikonik. Setelah makan malam, Anda akan check-in di Padadita Hotel.",
                  meals: "Sarapan, Makan Siang, Makan Malam",
                  activities:
                    "Bukit Hiliwuku, Airterjun Weimarang, Pantai Walakiri",
                },
              ],
            },
            destinations: {
              create: [
                {
                  name: "Hiliwuku Hill",
                  imageUrl: "/images/dest-hiliwuku.jpg",
                  order: 1,
                },
                {
                  name: "Weimarang Waterfall",
                  imageUrl: "/images/dest-weimarang.jpg",
                  order: 2,
                },
                {
                  name: "Walakiri Beach",
                  imageUrl: "/images/dest-walakiri.jpg",
                  order: 3,
                },
              ],
            },
          },
          {
            dayNumber: 3,
            imageUrl: "/images/dest-prailiu.jpg",
            translations: {
              create: [
                {
                  locale: "en",
                  title: "Culture & Departure",
                  description:
                    "After breakfast and checking out of the hotel, you'll be taken on a Sumba souvenir hunt. Continue to the Raja Prailiu Traditional Village to observe local life. After lunch, you'll be transferred to the airport for your return flight.",
                  meals: "Breakfast",
                  activities:
                    "Raja Prailiu Village, local market, airport transfer",
                },
                {
                  locale: "id",
                  title: "Budaya & Keberangkatan",
                  description: "Kunjungi kampung adat raja prailiu.",
                  meals: "Sarapan",
                  activities: "Pagi santai, pasar lokal, antar bandara",
                },
              ],
            },
            destinations: {
              create: [
                {
                  name: "Prailiu",
                  imageUrl: "/images/dest-prailiu.jpg",
                  order: 1,
                },
                {
                  name: "Market",
                  imageUrl: "/images/dest-market.jpg",
                  order: 2,
                },
              ],
            },
          },
        ],
      },
      flights: {
        create: [
          {
            airline: "Garuda Indonesia",
            flightNumber: "GA 652",
            departureCity: "Jakarta (CGK)",
            arrivalCity: "Tambolaka (TMC)",
            departureTime: "08:00",
            arrivalTime: "11:30",
            order: 1,
          },
          {
            airline: "Garuda Indonesia",
            flightNumber: "GA 653",
            departureCity: "Tambolaka (TMC)",
            arrivalCity: "Jakarta (CGK)",
            departureTime: "12:30",
            arrivalTime: "16:00",
            order: 2,
          },
        ],
      },
      hotels: {
        create: [
          {
            name: "Ella Hotel",
            location: "Tambolaka, Southwest Sumba",
            checkInDay: 1,
            checkOutDay: 2,
            imageUrl: "/images/hotel-ella.jpg",
          },
          {
            name: "Padadita Hotel",
            location: "Tambolaka, Southwest Sumba",
            checkInDay: 2,
            checkOutDay: 3,
            imageUrl: "/images/hotel-padadita.jpg",
          },
        ],
      },
      includes: {
        create: [
          { locale: "en", item: "Airport transfer" },
          { locale: "id", item: "Antar jemput bandara" },
          { locale: "en", item: "Air-conditioned vehicle" },
          { locale: "id", item: "Kendaraan ber-AC" },
          { locale: "en", item: "2 nights accommodation with breakfast" },
          { locale: "id", item: "Akomodasi 2 malam dengan sarapan" },
          { locale: "en", item: "Meals as indicated" },
          { locale: "id", item: "Makan sesuai itinerary" },
          // { locale: "en", item: "English-speaking guide" },
          // { locale: "id", item: "Pemandu berbahasa Indonesia" },
          { locale: "en", item: "Entrance fees" },
          { locale: "id", item: "Tiket masuk wisata" },
          { locale: "en", item: "Travel Insurance" },
          { locale: "id", item: "Asuransi Perjalanan" },
        ],
      },
      excludes: {
        create: [
          { locale: "en", item: "Domestic flights" },
          { locale: "id", item: "Penerbangan domestik" },
          { locale: "en", item: "Personal expenses" },
          { locale: "id", item: "Pengeluaran pribadi" },
        ],
      },
      tips: {
        create: [
          { locale: "en", tip: "Bring sunscreen and a hat" },
          { locale: "id", tip: "Bawa sunscreen dan topi" },
          { locale: "en", tip: "Bring personal needs" },
          { locale: "id", tip: "Bawa kebutuhan pribadi" },
        ],
      },
    },
  });

  // PAKET 2
  const trip2 = await prisma.trip.create({
    data: {
      slug: "sumba-Horizon-explorer",
      durationDays: 4,
      durationNights: 3,
      price: 3550000,
      imageUrl: "/images/trip-explorer.jpg",
      maxPax: 12,
      minPax: 2,
      featured: true,
      translations: {
        create: [
          {
            locale: "en",
            name: "Sumba Horizon Explorer",
            subtitle: "Beyond the Beaten Path",
            description:
              "This journey offers a deeper exploration from West to East Sumba, combining natural beauty and rich culture, including waterfalls, savannas, and stunning sunset spots.",
          },
          {
            locale: "id",
            name: "Sumba Horizon Explorer",
            subtitle: "Menjelajahi Sumba Barat",
            description:
              "Perjalanan ini menawarkan eksplorasi lebih mendalam dari Sumba Barat hingga Sumba Timur dengan kombinasi keindahan alam dan kekayaan budaya. Anda akan mengunjungi air terjun tersembunyi, savana luas, serta spot sunset terbaik yang menjadi ciri khas Sumba.",
          },
        ],
      },
      itineraries: {
        create: [
          {
            dayNumber: 1,
            imageUrl: "/images/dest-weekuri.jpg",
            translations: {
              create: [
                {
                  locale: "en",
                  title: "West Sumba Exploration",
                  description:
                    "Upon arrival at Tambolaka Airport, you will be greeted by our team and transferred to Ella Hotel for check-in. After lunch, continue to Mandorak Beach, known for its dramatic cliffs and pristine atmosphere. Next, visit Weekuri Lagoon, a crystal-clear saltwater lagoon perfect for relaxing. Continue to Ratenggaro Traditional Village to see the iconic high-roof houses. Enjoy dinner before returning to the hotel.",
                  meals: "Lunch, Dinner",
                  activities:
                    "Airport pickup, Weekuri Lake, Ratenggaro Village, Mandorak Beach",
                },
                {
                  locale: "id",
                  title: "Eksplorasi Sumba Barat",
                  description:
                    "Setibanya di Bandara Tambolaka, Anda akan dijemput dan memulai perjalanan menuju Ella Hotel untuk proses check-in. Setelah menikmati makan siang, perjalanan dilanjutkan menuju Pantai Mandorak yang terkenal dengan tebing karangnya yang eksotis dan suasana yang masih alami. Selanjutnya, Anda akan mengunjungi Danau Weekuri, sebuah laguna air asin dengan air yang jernih dan menenangkan. Perjalanan dilanjutkan ke Kampung Adat Ratenggaro untuk melihat rumah adat khas Sumba yang menjulang tinggi. Hari ditutup dengan makan malam sebelum kembali ke hotel.",
                  meals: "Makan Siang, Makan Malam",
                  activities:
                    "Antar jemput bandara, Danau Weekuri, Desa Ratenggaro, Pantai Mandorak",
                },
              ],
            },
            destinations: {
              create: [
                {
                  name: "Mandorak Beach",
                  imageUrl: "/images/dest-mandorak.jpg",
                  order: 1,
                },
                {
                  name: "Weekuri Lake",
                  imageUrl: "/images/dest-weekuri.jpg",
                  order: 2,
                },
                {
                  name: "Ratenggaro Village",
                  imageUrl: "/images/dest-ratenggaro.jpg",
                  order: 3,
                },
              ],
            },
          },
          {
            dayNumber: 2,
            imageUrl: "/images/dest-weikucara.jpg",
            translations: {
              create: [
                {
                  locale: "en",
                  title: "Culture & Scenic Transfer",
                  description:
                    "After breakfast and check-out, visit Weikucara Waterfall and Praijing Village. Continue to East Sumba and enjoy sunset at Wairinding Hill. Check-in at Padadita Hotel.",
                  meals: "Breakfast, Lunch, Dinner",
                  activities:
                    "Weikucara waterfall, Praijing Village, Warinding Hill",
                },
                {
                  locale: "id",
                  title: "Transfer Budaya & Pemandangan Pemandangan",
                  description:
                    "Setelah sarapan dan check-out hotel, perjalanan menuju Air Terjun Weikucara dan Kampung Adat Praijing. Setelah makan siang, perjalanan dilanjutkan ke Sumba Timur dan menikmati sunset di Bukit Wairinding. Check-in hotel Padadita.",
                  meals: "Sarapan, Makan Siang, Makan Malam",
                  activities:
                    "Airterjun Weikucara, Desa Praijing, Bukit Warinding",
                },
              ],
            },
            destinations: {
              create: [
                {
                  name: "Weikucara Waterfall",
                  imageUrl: "/images/dest-weikucara.jpg",
                  order: 1,
                },
                {
                  name: "Praijing Village",
                  imageUrl: "/images/dest-praijing.jpg",
                  order: 2,
                },
                {
                  name: "Warinding Hill",
                  imageUrl: "/images/dest-warinding.jpg",
                  order: 3,
                },
              ],
            },
          },
          {
            dayNumber: 3,
            imageUrl: "/images/dest-tanggedu.jpg",
            translations: {
              create: [
                {
                  locale: "en",
                  title: "Waterfall & Savanna",
                  description:
                    "After breakfast, visit Tanggedu Waterfall. Continue to Purukambera Savanna and enjoy sunset at Tanau Hill.",
                  meals: "Breakfast, Lunch, Dinner",
                  activities:
                    "Tanggedu waterfall, purukambera savana, tanau hill",
                },
                {
                  locale: "id",
                  title: "Air Terjun & Savanna",
                  description:
                    "Setelah sarapan, Anda akan mengunjungi Air Terjun Tanggedu. Setelah makan siang, perjalanan dilanjutkan ke Savana Purukambera dan menikmati sunset di Bukit Tanau.",
                  meals: "Sarapan, Makan Siang, Makan Malam",
                  activities:
                    "Airterjun tanggedu, savanna purukambera, bukit tanau",
                },
              ],
            },
            destinations: {
              create: [
                {
                  name: "Tanggedu waterfall",
                  imageUrl: "/images/dest-tanggedu.jpg",
                  order: 1,
                },
                {
                  name: "Purukambera Savanna",
                  imageUrl: "/images/dest-savana-purukambera.jpg",
                  order: 2,
                },
                {
                  name: "Tanau Hill",
                  imageUrl: "/images/dest-tenau.jpg",
                  order: 3,
                },
              ],
            },
          },
          {
            dayNumber: 4,
            imageUrl: "/images/dest-prailiu.jpg",
            translations: {
              create: [
                {
                  locale: "en",
                  title: "Departure",
                  description:
                    "Have breakfast at the hotel (optional, depending on your flight schedule). After that, visit Raja Prailiu Traditional Village (optional if departing from Waingapu Airport), then transfer to the airport.",
                  meals: "Breakfast",
                  activities: "Airport transfer",
                },
                {
                  locale: "id",
                  title: "Keberangkatan",
                  description:
                    "Sarapan pagi di hotel (opsional sesuai jadwal penerbangan), setelah itu berkunjung ke Kampung Adat Raja Prailiu (Opsional jika penerbangan dari bandara Waingapu), kemudian antar ke bandara",
                  meals: "Sarapan",
                  activities: "Kampung raja Prailiu, Antar ke bandara",
                },
              ],
            },
            destinations: {
              create: [
                {
                  name: "Prailiu",
                  imageUrl: "/images/dest-prailiu.jpg",
                  order: 1,
                },
                {
                  name: "Market",
                  imageUrl: "/images/dest-market.jpg",
                  order: 1,
                },
              ],
            },
          },
        ],
      },
      flights: {
        create: [
          {
            airline: "Wings Air",
            flightNumber: "IW 1852",
            departureCity: "Bali (DPS)",
            arrivalCity: "Tambolaka (TMC)",
            departureTime: "10:15",
            arrivalTime: "11:15",
            order: 1,
          },
          {
            airline: "Wings Air",
            flightNumber: "IW 1855",
            departureCity: "Waingapu (WGP)",
            arrivalCity: "Bali (DPS)",
            departureTime: "13:00",
            arrivalTime: "14:00",
            order: 2,
          },
        ],
      },
      hotels: {
        create: [
          {
            name: "Ella Hotel",
            location: "Tambolaka",
            checkInDay: 1,
            checkOutDay: 2,
            imageUrl: "/images/hotel-ella.jpg",
          },
          {
            name: "Hotel Padadita",
            location: "Waingapu",
            checkInDay: 2,
            checkOutDay: 4,
            imageUrl: "/images/hotel-padadita.jpg",
          },
        ],
      },
      includes: {
        create: [
          { locale: "en", item: "Airport transfer" },
          { locale: "id", item: "Antar jemput bandara" },
          { locale: "en", item: "Air-conditioned vehicle" },
          { locale: "id", item: "Kendaraan ber-AC" },
          { locale: "en", item: "3 nights accommodation with breakfast" },
          { locale: "id", item: "Akomodasi 3 malam dengan sarapan" },
          { locale: "en", item: "Meals as indicated" },
          { locale: "id", item: "Makan sesuai itinerary" },
          // { locale: "en", item: "English-speaking guide" },
          // { locale: "id", item: "Pemandu berbahasa Indonesia" },
          { locale: "en", item: "Entrance fees" },
          { locale: "id", item: "Tiket masuk wisata" },
          { locale: "en", item: "Travel Insurance" },
          { locale: "id", item: "Asuransi Perjalanan" },
        ],
      },
      excludes: {
        create: [
          { locale: "en", item: "Domestic flights" },
          { locale: "id", item: "Penerbangan domestik" },
          { locale: "en", item: "Personal expenses" },
          { locale: "id", item: "Pengeluaran pribadi" },
        ],
      },
      tips: {
        create: [
          { locale: "en", tip: "Bring sunscreen and a hat" },
          { locale: "id", tip: "Bawa sunscreen dan topi" },
          { locale: "en", tip: "Bring personal needs" },
          { locale: "id", tip: "Bawa kebutuhan pribadi" },
        ],
      },
    },
  });

  // PAKET 3
  const trip3 = await prisma.trip.create({
    data: {
      slug: "sumba-soul-experience",
      durationDays: 5,
      durationNights: 4,
      price: 3750000,
      imageUrl: "/images/trip-discovery.jpg",
      maxPax: 12,
      minPax: 2,
      featured: true,
      translations: {
        create: [
          {
            locale: "en",
            name: "Sumba Soul Experience",
            subtitle: "Unveil the Hidden Island",
            description:
              "A relaxed and immersive journey designed to explore the natural beauty and cultural richness of Sumba at a comfortable pace. From exotic beaches and waterfalls to vast savannas and traditional villages, every destination is experienced more deeply and meaningfully.",
          },
          {
            locale: "id",
            name: "Sumba Sumba Soul Experience",
            subtitle: "Ukap Pulau Tersembunyi",
            description:
              "Perjalanan ini memberikan pengalaman yang lebih santai dan mendalam untuk menikmati keindahan alam Sumba tanpa terburu-buru. Anda akan diajak menjelajahi kombinasi sempurna antara pantai eksotis, air terjun alami, savana luas, serta budaya lokal yang masih terjaga. Dengan durasi yang lebih panjang, setiap destinasi dapat dinikmati dengan lebih maksimal dan penuh kesan.",
          },
        ],
      },
      itineraries: {
        create: [
          {
            dayNumber: 1,
            imageUrl: "/images/dest-weekuri.jpg",
            translations: {
              create: [
                {
                  locale: "en",
                  title: "Welcome to Sumba",
                  description:
                    "Upon arrival at Tambolaka Airport, you will be greeted and transferred to the hotel for check-in. After lunch, visit Mandorak Beach with its dramatic cliffs, followed by Weekuri Lagoon with crystal-clear water. Continue to Ratenggaro Traditional Village before dinner and return to the hotel.",
                  meals: "Breakpst, Lunch, Dinner",
                  activities: "Weekuri, Ratenggaro, Mandorak",
                },
                {
                  locale: "id",
                  title: "Selamat Datang di Sumba",
                  description:
                    "Perjalanan ini memberikan pengalaman yang lebih santai dan mendalam untuk menikmati keindahan alam Sumba tanpa terburu-buru. Anda akan diajak menjelajahi kombinasi sempurna antara pantai eksotis, air terjun alami, savana luas, serta budaya lokal yang masih terjaga. Dengan durasi yang lebih panjang, setiap destinasi dapat dinikmati dengan lebih maksimal dan penuh kesan.",
                  meals: "Makan Siang, Makan Malam",
                  activities: "Mandorak ,Weekuri Ratenggaro, Mandorak",
                },
              ],
            },
            destinations: {
              create: [
                {
                  name: "Mandorak Beach",
                  imageUrl: "/images/dest-mandorak.jpg",
                  order: 1,
                },
                {
                  name: "Weekuri Lake",
                  imageUrl: "/images/dest-weekuri.jpg",
                  order: 2,
                },
                {
                  name: "Ratenggaro Village",
                  imageUrl: "/images/dest-ratenggaro.jpg",
                  order: 3,
                },
              ],
            },
          },
          {
            dayNumber: 2,
            imageUrl: "/images/dest-weikucara.jpg",
            translations: {
              create: [
                {
                  locale: "en",
                  title: "Waterfall & Cultural Journey",
                  description:
                    "After breakfast and check-out, visit Weikucara Waterfall. Continue to Praijing Traditional Village to experience local culture. After lunch, transfer to East Sumba and check-in at the hotel..",
                  meals: "Breakfast, Lunch, Dinner",
                  activities: "Weikucara waterfall, Praijing Village",
                },
                {
                  locale: "id",
                  title: "Airterjun & Budaya",
                  description:
                    "Setelah sarapan dan check-out, perjalanan menuju Air Terjun Weikucara yang masih alami. Dilanjutkan ke Kampung Adat Praijing untuk mengenal budaya lokal. Setelah makan siang, perjalanan menuju Sumba Timur dan check-in hotel.",
                  meals: "Sarapan, Makan Siang, Makan Malam",
                  activities: "Airterjun Weikucara, Desa Praijing",
                },
              ],
            },
            destinations: {
              create: [
                {
                  name: "Weikucara Waterfall",
                  imageUrl: "/images/dest-weikucara.jpg",
                  order: 1,
                },
                {
                  name: "Praijing Village",
                  imageUrl: "/images/dest-praijing.jpg",
                  order: 2,
                },
              ],
            },
          },
          {
            dayNumber: 3,
            imageUrl: "/images/dest-tanggedu.jpg",
            translations: {
              create: [
                {
                  locale: "en",
                  title: "Waterfall & Sunset",
                  description:
                    "After breakfast, visit Tanggedu Waterfall known for its unique rock formations. After lunch, head to Wairinding Hill to enjoy a beautiful sunset. Return to hotel after dinner.",
                  meals: "Breakfast, Lunch, Dinner",
                  activities: "Tanggedu waterfall, Warinding Hill",
                },
                {
                  locale: "id",
                  title: "Air Terjun & Matahari Terbenam",
                  description:
                    "Setelah sarapan, Anda akan mengunjungi Air Terjun Tanggedu yang terkenal dengan formasi batu unik. Setelah makan siang, perjalanan dilanjutkan ke Bukit Wairinding untuk menikmati sunset yang indah. Kembali ke hotel setelah makan malam.",
                  meals: "Sarapan, Makan Siang, Makan Malam",
                  activities: "Airterjun tanggedu, Bukit Warinding",
                },
              ],
            },
            destinations: {
              create: [
                {
                  name: "Tanggedu waterfall",
                  imageUrl: "/images/dest-tanggedu.jpg",
                  order: 1,
                },
                {
                  name: "Warinding Hill",
                  imageUrl: "/images/dest-warinding.jpg",
                  order: 2,
                },
              ],
            },
          },
          {
            dayNumber: 4,
            imageUrl: "/images/dest-weimarang.jpg",
            translations: {
              create: [
                {
                  locale: "en",
                  title: "Nature & Beach Sunset",
                  description:
                    "After breakfast, visit Weimarang Waterfall for swimming and relaxation. After lunch, continue to Walakiri Beach to enjoy sunset with iconic mangrove trees. Return to hotel after dinner.",
                  meals: "Breakpast, Lunch, Dinner",
                  activities: "Weimawang, Walakiri",
                },
                {
                  locale: "id",
                  title: "Alam & Pantai Matahari Terbenam",
                  description:
                    "Setelah sarapan, perjalanan menuju Air Terjun Weimarang untuk berenang dan menikmati suasana alam. Setelah makan siang, dilanjutkan ke Pantai Walakiri untuk berburu sunset dengan pohon mangrove yang ikonik. Kembali ke hotel setelah makan malam.",
                  meals: "Sarapan, Makan Siang, Makan Malam",
                  activities: "Weimarang, walakiri",
                },
              ],
            },
            destinations: {
              create: [
                {
                  name: "Weimarang",
                  imageUrl: "/images/dest-weimarang.jpg",
                  order: 1,
                },
                {
                  name: "Walakiri",
                  imageUrl: "/images/dest-walakiri.jpg",
                  order: 2,
                },
              ],
            },
          },
          {
            dayNumber: 5,
            imageUrl: "/images/dest-tenau.jpg",
            translations: {
              create: [
                {
                  locale: "en",
                  title: "Sunrise & Departure",
                  description:
                    "Start the day with sunrise at Tanau Hill. After breakfast and check-out, visit Prailiu Traditional Village and shop for local souvenirs. Transfer to the airport for departure.",
                  meals: "Breakpast",
                  activities: "Airport transfer",
                },
                {
                  locale: "id",
                  title: "Matahari Terbit & Keberangkatan",
                  description:
                    "Pagi hari dimulai dengan berburu sunrise di Bukit Tanau. Setelah sarapan dan check-out, Anda akan mengunjungi Kampung Adat Prailiu serta berbelanja oleh-oleh khas Sumba. Setelah itu, diantar ke bandara untuk penerbangan kembali..",
                  meals: "Sarapan",
                  activities: "Antar bandara",
                },
              ],
            },
            destinations: {
              create: [
                {
                  name: "Tenau",
                  imageUrl: "/images/dest-tenau.jpg",
                  order: 1,
                },
                {
                  name: "Priliu",
                  imageUrl: "/images/dest-prailiu.jpg",
                  order: 1,
                },
                {
                  name: "market",
                  imageUrl: "/images/dest-market.jpg",
                  order: 1,
                },
              ],
            },
          },
        ],
      },
      flights: {
        create: [
          {
            airline: "Nam Air",
            flightNumber: "IN 921",
            departureCity: "Jakarta (CGK)",
            arrivalCity: "Tambolaka (TMC)",
            departureTime: "06:30",
            arrivalTime: "10:10",
            order: 1,
          },
        ],
      },
      hotels: {
        create: [
          {
            name: "Ella Hotel",
            location: "Tambolaka",
            checkInDay: 1,
            checkOutDay: 2,
            imageUrl: "/images/hotel-ella.jpg",
          },
          {
            name: "Padadita Hotel",
            location: "Waingapu",
            checkInDay: 2,
            checkOutDay: 5,
            imageUrl: "/images/hotel-padadita.jpg",
          },
        ],
      },
      includes: {
        create: [
          { locale: "en", item: "Airport transfer" },
          { locale: "id", item: "Antar jemput bandara" },
          { locale: "en", item: "Air-conditioned vehicle" },
          { locale: "id", item: "Kendaraan ber-AC" },
          { locale: "en", item: "4 nights accommodation with breakfast" },
          { locale: "id", item: "Akomodasi 4 malam dengan sarapan" },
          { locale: "en", item: "Meals as indicated" },
          { locale: "id", item: "Makan sesuai itinerary" },
          // { locale: "en", item: "English-speaking guide" },
          // { locale: "id", item: "Pemandu berbahasa Indonesia" },
          { locale: "en", item: "Entrance fees" },
          { locale: "id", item: "Tiket masuk wisata" },
          { locale: "en", item: "Travel Insurance" },
          { locale: "id", item: "Asuransi Perjalanan" },
        ],
      },
      excludes: {
        create: [
          { locale: "en", item: "Domestic flights" },
          { locale: "id", item: "Penerbangan domestik" },
          { locale: "en", item: "Personal expenses" },
          { locale: "id", item: "Pengeluaran pribadi" },
        ],
      },
      tips: {
        create: [
          { locale: "en", tip: "Bring sunscreen and a hat" },
          { locale: "id", tip: "Bawa sunscreen dan topi" },
          { locale: "en", tip: "Bring personal needs" },
          { locale: "id", tip: "Bawa kebutuhan pribadi" },
        ],
      },
    },
  });

  // PAKET 4
  const trip4 = await prisma.trip.create({
    data: {
      slug: "sumba-adventure",
      durationDays: 6,
      durationNights: 5,
      price: 5000000,
      imageUrl: "/images/trip-adventure.jpg",
      maxPax: 12,
      minPax: 2,
      featured: false,
      translations: {
        create: [
          {
            locale: "en",
            name: "Sumba Grand Adventure",
            subtitle:
              "Comprehensive package offering a variety of destinations",
            description:
              "A comprehensive package offering a wider range of destinations, from beaches and waterfalls to savannas and traditional villages. Perfect for those seeking a complete Sumba experience.",
          },
          {
            locale: "id",
            name: "Sumba Grand Adventure",
            subtitle: "Paket komprehensif yang menawarkan beragam destinasi",
            description:
              "Paket ini menawarkan eksplorasi yang lebih lengkap dengan variasi destinasi yang lebih banyak, mulai dari pantai, air terjun, savana, hingga desa adat. Cocok untuk Anda yang ingin merasakan pengalaman Sumba secara menyeluruh dengan waktu yang lebih fleksibel.",
          },
        ],
      },
      itineraries: {
        create: [
          {
            dayNumber: 1,
            imageUrl: "/images/dest-mandorak.jpg",
            translations: {
              create: [
                {
                  locale: "en",
                  title: "West Sumba Exploration",
                  description:
                    "Upon arrival at Tambolaka Airport, you will be met and transferred to your hotel for check-in. After lunch, visit Mandorak Beach, Weekuri Lake, and Ratenggaro Traditional Village. Dinner and return to the hotel.",
                  meals: "Lunch, Dinner",
                  activities: "Mandorak, Weekuri, Ratenggaro",
                },
                {
                  locale: "id",
                  title: "Eksplorasi Sumba Barat",
                  description:
                    "Setibanya di Bandara Tambolaka, Anda akan dijemput dan memulai perjalanan menuju hotel untuk check-in. Setelah makan siang, kunjungan ke Pantai Mandorak, Danau Weekuri, dan Kampung Adat Ratenggaro. Makan malam dan kembali ke hotel.",
                  meals: "Makan Siang, Makan Malam",
                  activities: "Weekuri, Ratenggaro, Mandorak",
                },
              ],
            },
            destinations: {
              create: [
                {
                  name: "Mandorak Beach",
                  imageUrl: "/images/dest-mandorak.jpg",
                  order: 1,
                },
                {
                  name: "Weekuri Lake",
                  imageUrl: "/images/dest-weekuri.jpg",
                  order: 2,
                },
                {
                  name: "Ratenggaro Village",
                  imageUrl: "/images/dest-ratenggaro.jpg",
                  order: 3,
                },
              ],
            },
          },
          {
            dayNumber: 2,
            imageUrl: "/images/dest-weikucara.jpg",
            translations: {
              create: [
                {
                  locale: "en",
                  title: "Waterfall & Village",
                  description:
                    "After breakfast and check-out, visit Weikucara Waterfall and Praijing Village. Dinner and check-in at Morica Hotel.",
                  meals: "Breakfast, Lunch, Dinner",
                  activities: "Weikucara waterfall, Praijing Village",
                },
                {
                  locale: "id",
                  title: "Air Terjun & Desa",
                  description:
                    "Setelah sarapan dan check-out, perjalanan menuju Air Terjun Weikucara dan Kampung Adat Praijing. Setelah makan malam, check-in di Hotel Morica.",
                  meals: "Sarapan, Makan Siang, Makan Malam",
                  activities: "Airterjun Weikucara, Desa Praijing",
                },
              ],
            },
            destinations: {
              create: [
                {
                  name: "Weikucara Waterfall",
                  imageUrl: "/images/dest-weikucara.jpg",
                  order: 1,
                },
                {
                  name: "Praijing Village",
                  imageUrl: "/images/dest-praijing.jpg",
                  order: 2,
                },
              ],
            },
          },
          {
            dayNumber: 3,
            imageUrl: "/images/dest-watubela.jpg",
            translations: {
              create: [
                {
                  locale: "en",
                  title: "Beach & Savanna",
                  description:
                    "After breakfast and check-out, enjoy lunch at Watumbela Beach. Continue to Wairinding Hill for scenic savanna views. Dinner and check-in at Padadita Hotel.",
                  meals: "Breakfast, Lunch, Dinner",
                  activities: "Watubela, Warinding",
                },
                {
                  locale: "id",
                  title: "Pantai & Savannar",
                  description:
                    "Setelah sarapan dan check-out, makan siang di Pantai Watumbela. Perjalanan dilanjutkan ke Bukit Wairinding untuk menikmati pemandangan savana. Makan malam dan check-in di Padadita Hotel.",
                  meals: "Sarapan, Makan Siang, Makan Malam",
                  activities: "Watubela, Warinding",
                },
              ],
            },
            destinations: {
              create: [
                {
                  name: "Watumbela Beach",
                  imageUrl: "/images/dest-watubela.jpg",
                  order: 1,
                },
                {
                  name: "Warinding Hill",
                  imageUrl: "/images/dest-warinding.jpg",
                  order: 2,
                },
              ],
            },
          },
          {
            dayNumber: 4,
            imageUrl: "/images/dest-hiliwuku.jpg",
            translations: {
              create: [
                {
                  locale: "en",
                  title: "Nature & Sunset",
                  description:
                    "After breakfast, visit Hiliwuku Hill and Weimarang Waterfall for swimming. After lunch, head to Walakiri Beach for sunset. Dinner and return to hotel.",
                  meals: "Breakpast, Lunch, Dinner",
                  activities: "Hiliwuku, Warinding",
                },
                {
                  locale: "id",
                  title: "Alam & Sunset",
                  description:
                    "etelah sarapan, perjalanan ke Bukit Hiliwuku lalu ke Air Terjun Weimarang untuk berenang. Setelah makan siang, lanjut ke Pantai Walakiri untuk menikmati sunset. Makan malam dan kembali ke hotel.",
                  meals: "Sarapan, Makan Siang, Makan Malam",
                  activities: "Hiliwuku, Warinding",
                },
              ],
            },
            destinations: {
              create: [
                {
                  name: "Hiliwuku",
                  imageUrl: "/images/dest-hiliwuku.jpg",
                  order: 1,
                },
                {
                  name: "Weimarang",
                  imageUrl: "/images/dest-weimarang.jpg",
                  order: 2,
                },
              ],
            },
          },
          {
            dayNumber: 5,
            imageUrl: "/images/dest-tanggedu.jpg",
            translations: {
              create: [
                {
                  locale: "en",
                  title: "Waterfall & Savanna",
                  description:
                    "After breakfast, visit Tanggedu Waterfall. Continue to Purukambera Savanna and Tanau Hill for scenic views. Dinner and return to hotel.",
                  meals: "Breakpast, Lunch, Dinner",
                  activities: "Tanggedu, Purukambera, Tanau",
                },
                {
                  locale: "id",
                  title: "Air Terjun & Savanna",
                  description:
                    "Setelah sarapan, kunjungan ke Air Terjun Tanggedu. Setelah makan siang, perjalanan ke Savana Purukambera dan Bukit Tanau untuk menikmati panorama Sumba. Makan malam dan kembali ke hotel., Purukambera, Tanau",
                  meals: "Sarapan, Makan Siang, Makan Malam",
                  activities: "Tanggedu, Purukambera, Tanau",
                },
              ],
            },
            destinations: {
              create: [
                {
                  name: "Tanggedu",
                  imageUrl: "/images/dest-tanggedu.jpg",
                  order: 1,
                },
                {
                  name: "Purukambera",
                  imageUrl: "/images/dest-savana-purukambera.jpg",
                  order: 2,
                },
                {
                  name: "Tanau",
                  imageUrl: "/images/dest-tenau.jpg",
                  order: 2,
                },
              ],
            },
          },
          {
            dayNumber: 6,
            imageUrl: "/images/dest-prailiu.jpg",
            translations: {
              create: [
                {
                  locale: "en",
                  title: "Culture & Departure",
                  description:
                    "After breakfast and check-out, enjoy souvenir shopping and visit Prailiu Village. Transfer to Waingapu Airport for departure.",
                  meals: "Breakpast",
                  activities: "Airport",
                },
                {
                  locale: "id",
                  title: "Budaya & Keberangkatan",
                  description:
                    "KSetelah sarapan dan check-out, Anda akan berbelanja oleh-oleh khas Sumba dan mengunjungi Kampung Adat Prailiu. Setelah itu, diantar ke Bandara Waingapu untuk penerbangan kembali.",
                  meals: "Sarapan",
                  activities: "Prailiu, Market,Bandara",
                },
              ],
            },
            destinations: {
              create: [
                {
                  name: "Raja Prailiu Village",
                  imageUrl: "/images/dest-prailiu.jpg",
                  order: 1,
                },
                {
                  name: "Market",
                  imageUrl: "/images/dest-market.jpg",
                  order: 1,
                },
              ],
            },
          },
        ],
      },
      flights: {
        create: [
          {
            airline: "Garuda",
            flightNumber: "GA 652",
            departureCity: "CGK",
            arrivalCity: "TMC",
            departureTime: "08:00",
            arrivalTime: "11:30",
            order: 1,
          },
        ],
      },
      hotels: {
        create: [
          {
            name: "Ella Hotel",
            location: "Tambolaka",
            checkInDay: 1,
            checkOutDay: 2,
            imageUrl: "/images/hotel-ella.jpg",
          },
          {
            name: "Morika Hotel",
            location: "Tambolaka",
            checkInDay: 2,
            checkOutDay: 3,
            imageUrl: "/images/hotel-morika.jpg",
          },
          {
            name: "Padadita Hotel",
            location: "Waingapu",
            checkInDay: 3,
            checkOutDay: 6,
            imageUrl: "/images/hotel-padadita.jpg",
          },
        ],
      },
      includes: {
        create: [
          { locale: "en", item: "Airport transfer" },
          { locale: "id", item: "Antar jemput bandara" },
          { locale: "en", item: "Air-conditioned vehicle" },
          { locale: "id", item: "Kendaraan ber-AC" },
          { locale: "en", item: "5 nights accommodation with breakfast" },
          { locale: "id", item: "Akomodasi 5 malam dengan sarapan" },
          { locale: "en", item: "Meals as indicated" },
          { locale: "id", item: "Makan sesuai itinerary" },
          // { locale: "en", item: "English-speaking guide" },
          // { locale: "id", item: "Pemandu berbahasa Indonesia" },
          { locale: "en", item: "Entrance fees" },
          { locale: "id", item: "Tiket masuk wisata" },
          { locale: "en", item: "Travel Insurance" },
          { locale: "id", item: "Asuransi Perjalanan" },
        ],
      },
      excludes: {
        create: [
          { locale: "en", item: "Domestic flights" },
          { locale: "id", item: "Penerbangan domestik" },
          { locale: "en", item: "Personal expenses" },
          { locale: "id", item: "Pengeluaran pribadi" },
        ],
      },
      tips: {
        create: [
          { locale: "en", tip: "Bring sunscreen and a hat" },
          { locale: "id", tip: "Bawa sunscreen dan topi" },
          { locale: "en", tip: "Bring personal needs" },
          { locale: "id", tip: "Bawa kebutuhan pribadi" },
        ],
      },
    },
  });

  // PAKET 5
  const trip5 = await prisma.trip.create({
    data: {
      slug: "sumba-ultimate-journey",
      durationDays: 7,
      durationNights: 6,
      price: 7300000,
      imageUrl: "/images/trip-odyssey.jpg",
      maxPax: 12,
      minPax: 2,
      featured: true,
      translations: {
        create: [
          {
            locale: "en",
            name: "Sumba Ultimate Journey",
            subtitle: "The Ultimate Sumba Experience",
            description:
              "This is the ultimate package for travelers who want to explore Sumba in a complete and relaxed way. With a longer duration, you will experience a perfect combination of natural beauty, local culture, and exclusive destinations. From exotic beaches and waterfalls to vast savannas and traditional villages, every moment is crafted into a comfortable and unforgettable journey.",
          },
          {
            locale: "id",
            name: "Sumba Ultimate Journey",
            subtitle: "Pengalaman Sumba Terbaik",
            description:
              "Paket ini merupakan pilihan terbaik untuk Anda yang ingin menjelajahi Sumba secara menyeluruh tanpa terburu-buru. Dengan durasi yang lebih panjang, Anda akan menikmati kombinasi lengkap antara keindahan alam, budaya lokal, serta destinasi eksklusif yang jarang dikunjungi. Mulai dari pantai eksotis, air terjun alami, savana luas, hingga desa adat yang masih mempertahankan tradisi leluhur—semuanya dirangkai dalam perjalanan yang nyaman, santai, dan penuh pengalaman berkesan.",
          },
        ],
      },
      itineraries: {
        create: [
          {
            dayNumber: 1,
            imageUrl: "/images/dest-mandorak.jpg",
            translations: {
              create: [
                {
                  locale: "en",
                  title: "West Sumba Exploration",
                  description:
                    "Upon arrival at Tambolaka Airport, you will be greeted and transferred to the hotel for check-in. After lunch, visit Mandorak Beach with its dramatic cliffs. Continue to Weekuri Lagoon, a crystal-clear saltwater lagoon, and then to Ratenggaro Traditional Village to see iconic Sumba houses. Dinner and return to the hotel.",
                  meals: "Lunch, Dinner",
                  activities: "Mandorak, Weekuri, Ratenggaro.",
                },
                {
                  locale: "id",
                  title: "Eksplorasi Sumba Barat",
                  description:
                    "Setibanya di Bandara Tambolaka, Anda akan dijemput oleh tim kami dan memulai perjalanan menuju hotel untuk check-in. Setelah makan siang, perjalanan dilanjutkan ke Pantai Mandorak yang terkenal dengan tebing karangnya yang eksotis. Selanjutnya, Anda akan mengunjungi Danau Weekuri, sebuah laguna air asin dengan air jernih yang menenangkan. Perjalanan dilanjutkan ke Kampung Adat Ratenggaro untuk melihat rumah adat khas Sumba. Hari ditutup dengan makan malam sebelum kembali ke hotel.",
                  meals: "Makan Siang, Makan Malam",
                  activities: "Mandorak, Weekuri, Ratenggaro.",
                },
              ],
            },
            destinations: {
              create: [
                {
                  name: "Mandorak Beach",
                  imageUrl: "/images/dest-mandorak.jpg",
                  order: 3,
                },
                {
                  name: "Weekuri Lake",
                  imageUrl: "/images/dest-weekuri.jpg",
                  order: 1,
                },
                {
                  name: "Ratenggaro Village",
                  imageUrl: "/images/dest-ratenggaro.jpg",
                  order: 2,
                },
              ],
            },
          },
          {
            dayNumber: 2,
            imageUrl: "/images/dest-weikucara.jpg",
            translations: {
              create: [
                {
                  locale: "en",
                  title: "Waterfall & Culture",
                  description:
                    "After breakfast and check-out, visit Weikucara Waterfall. Continue to Praijing Traditional Village to experience local culture. Then explore Lapopu Waterfall, one of the tallest and most beautiful waterfalls in Sumba. Dinner and check-in at the hotel.",
                  meals: "Breakfast, Lunch, Dinner",
                  activities:
                    "Weikucara waterfall, Praijing Village, Lapopu Waterfall",
                },
                {
                  locale: "id",
                  title: "Airterjun & Budaya",
                  description:
                    "Setelah sarapan dan check-out, perjalanan menuju Air Terjun Weikucara yang masih alami dan asri. Selanjutnya, Anda akan mengunjungi Kampung Adat Praijing untuk mengenal kehidupan dan budaya masyarakat lokal. Perjalanan dilanjutkan menuju Air Terjun Lapopu, salah satu air terjun tertinggi di Sumba dengan pemandangan yang spektakuler. Setelah makan malam, check-in hotel dan istirahat.",
                  meals: "Sarapan, Makan Siang, Makan Malam",
                  activities: "Airterjun Weikucara, Desa Praijing, Lapopu",
                },
              ],
            },
            destinations: {
              create: [
                {
                  name: "Weikucara Waterfall",
                  imageUrl: "/images/dest-weikucara.jpg",
                  order: 1,
                },
                {
                  name: "Praijing Village",
                  imageUrl: "/images/dest-praijing.jpg",
                  order: 2,
                },
                {
                  name: "Lapopu Waterfall",
                  imageUrl: "/images/dest-lapopu.jpg",
                  order: 2,
                },
              ],
            },
          },
          {
            dayNumber: 3,
            imageUrl: "/images/dest-watubela.jpg",
            translations: {
              create: [
                {
                  locale: "en",
                  title: "Beach & Savanna Journey",
                  description:
                    "After breakfast and check-out, head to Watumbela Beach for relaxation and lunch. Continue to Wairinding Hill to enjoy the vast savanna views, especially beautiful in the afternoon. Dinner and check-in at the hotel in East Sumba.",
                  meals: "Breakfast, Lunch, Dinner",
                  activities: "Watubela, warinding hill",
                },
                {
                  locale: "id",
                  title: "Pantai & Perjalanan Savanna",
                  description:
                    "Setelah sarapan dan check-out, perjalanan menuju Pantai Watumbela untuk menikmati suasana pantai yang masih alami sambil makan siang. Perjalanan dilanjutkan menuju Bukit Wairinding untuk menikmati pemandangan savana luas khas Sumba yang indah, terutama saat sore hari. Makan malam dan check-in hotel di Sumba Timur.",
                  meals: "Sarapan, Makan Siang, Makan Malam",
                  activities: "Pantai Watubela, Bukit Warinding.",
                },
              ],
            },
            destinations: {
              create: [
                {
                  name: "Watumbela Beach",
                  imageUrl: "/images/dest-watubela.jpg",
                  order: 1,
                },
                {
                  name: "Warinding Hill",
                  imageUrl: "/images/dest-warinding.jpg",
                  order: 2,
                },
              ],
            },
          },
          {
            dayNumber: 4,
            imageUrl: "/images/dest-weimarang.jpg",
            translations: {
              create: [
                {
                  locale: "en",
                  title: "Waterfall & Sunset Beach",
                  description:
                    "After breakfast, visit Weimarang Waterfall for swimming and relaxation. After lunch, head to Walakiri Beach to enjoy a beautiful sunset with iconic mangrove trees. Dinner and return to the hotel.",
                  meals: "Breakpast, Lunch, Dinner",
                  activities: "Weimarang, Walakiri",
                },
                {
                  locale: "id",
                  title: "Air Terjun & Pantai Sunset",
                  description:
                    "Setelah sarapan, perjalanan menuju Air Terjun Weimarang untuk berenang dan menikmati suasana alam yang segar. Setelah makan siang, perjalanan dilanjutkan ke Pantai Walakiri untuk menikmati sunset dengan pemandangan pohon mangrove yang ikonik. Kembali ke hotel setelah makan malam..",
                  meals: "Sarapan, Makan Siang, Makan Malam",
                  activities: "Weimarang, walakiri",
                },
              ],
            },
            destinations: {
              create: [
                {
                  name: "waimarang",
                  imageUrl: "/images/dest-weimarang.jpg",
                  order: 1,
                },
                {
                  name: "walakiri",
                  imageUrl: "/images/dest-walakiri.jpg",
                  order: 2,
                },
              ],
            },
          },
          {
            dayNumber: 5,
            imageUrl: "/images/dest-tanggedu.jpg",
            translations: {
              create: [
                {
                  locale: "en",
                  title: "Iconic Waterfall & Savanna",
                  description:
                    "After breakfast, visit Tanggedu Waterfall known for its unique rock formations. After lunch, continue to the vast Purukambera Savanna and then to Tanau Hill for stunning views. Dinner and return to the hotel.",
                  meals: "Breakpast, Lunch, Dinner",
                  activities: "Tanggedu, Purukambera, Tanau",
                },
                {
                  locale: "id",
                  title: "Air Terjun dan Savana Ikonik",
                  description:
                    "Setelah sarapan, Anda akan mengunjungi Air Terjun Tanggedu yang terkenal dengan formasi batu unik dan pemandangan dramatis. Setelah makan siang, perjalanan dilanjutkan ke Savana Purukambera yang luas, kemudian ke Bukit Tanau untuk menikmati panorama alam Sumba yang menakjubkan. Makan malam dan kembali ke hotel.",
                  meals: "Sarapan, Makan Siang, Makan Malam",
                  activities: "Tanggedu, Purukambera, Tanau",
                },
              ],
            },
            destinations: {
              create: [
                {
                  name: "Tanggedu",
                  imageUrl: "/images/dest-tanggedu.jpg",
                  order: 1,
                },
                {
                  name: "Purukambera",
                  imageUrl: "/images/dest-savana-purukambera.jpg",
                  order: 2,
                },
                {
                  name: "Tanau",
                  imageUrl: "/images/dest-tenau.jpg",
                  order: 2,
                },
              ],
            },
          },
          {
            dayNumber: 6,
            imageUrl: "/images/dest-watuparunu.jpg",
            translations: {
              create: [
                {
                  locale: "en",
                  title: "Sunrise & Cultural Villages",
                  description:
                    "Start the day with a sunrise experience at Watu Parunu, one of the best sunrise spots in East Sumba. Continue with visits to Rende and Pau Traditional Villages to explore local culture and traditions. Dinner and return to the hotel.",
                  meals: "Breakpast, Lunch, Dinner",
                  activities: "watuparunu, Rende, Pau",
                },
                {
                  locale: "id",
                  title: "Matahari Terbit & Desa-desa Budaya",
                  description:
                    "Pagi hari dimulai dengan berburu sunrise di Watu Parunu, salah satu spot terbaik untuk menikmati matahari terbit di Sumba Timur. Setelah itu, perjalanan dilanjutkan dengan mengunjungi Kampung Adat Rende dan Kampung Adat Pau untuk melihat langsung kehidupan masyarakat lokal dan tradisi yang masih terjaga. Makan malam dan kembali ke hotel.",
                  meals: "S, MS, MM",
                  activities: "watuparunu, Rende Village. Pau Village",
                },
              ],
            },
            destinations: {
              create: [
                {
                  name: "Watuparunu",
                  imageUrl: "/images/dest-watuparunu.jpg",
                  order: 1,
                },
                {
                  name: "Rende",
                  imageUrl: "/images/dest-rende.jpg",
                  order: 2,
                },
                {
                  name: "Pau",
                  imageUrl: "/images/dest-pau.jpg",
                  order: 3,
                },
              ],
            },
          },
          {
            dayNumber: 7,
            imageUrl: "/images/dest-prailiu.jpg",
            translations: {
              create: [
                {
                  locale: "en",
                  title: "Culture & Departure",
                  description:
                    "After breakfast and check-out, enjoy souvenir shopping. Visit Prailiu Traditional Village before lunch. Then transfer to the airport for your departure, bringing unforgettable memories from Sumba.",
                  meals: "Breakpast",
                  activities: "Prailiu, Market, Airport",
                },
                {
                  locale: "id",
                  title: "Budaya & Keberangkatan",
                  description:
                    "Setelah sarapan dan check-out hotel, Anda akan diajak berburu oleh-oleh khas Sumba. Perjalanan dilanjutkan ke Kampung Adat Prailiu sebelum makan siang. Setelah itu, Anda akan diantar menuju bandara untuk penerbangan kembali, membawa kenangan indah dari Sumba.",
                  meals: "Sarapan",
                  activities: "Prailiu, Market, Bandara",
                },
              ],
            },
            destinations: {
              create: [
                {
                  name: "Prailiu",
                  imageUrl: "/images/dest-prailiu.jpg",
                  order: 1,
                },
                {
                  name: "Market",
                  imageUrl: "/images/dest-market.jpg",
                  order: 1,
                },
              ],
            },
          },
        ],
      },
      flights: {
        create: [
          {
            airline: "Garuda",
            flightNumber: "GA 652",
            departureCity: "CGK",
            arrivalCity: "TMC",
            departureTime: "08:00",
            arrivalTime: "11:30",
            order: 1,
          },
        ],
      },
      hotels: {
        create: [
          {
            name: "Ella Hotel",
            location: "Tambolaka",
            checkInDay: 1,
            checkOutDay: 2,
            imageUrl: "/images/hotel-ella.jpg",
          },
          {
            name: "Morika Hotel",
            location: "Tambolaka",
            checkInDay: 2,
            checkOutDay: 3,
            imageUrl: "/images/hotel-morika.jpg",
          },
          {
            name: "Padadita Hotel",
            location: "Waingapu",
            checkInDay: 3,
            checkOutDay: 7,
            imageUrl: "/images/hotel-padadita.jpg",
          },
        ],
      },
      includes: {
        create: [
          { locale: "en", item: "Airport transfer" },
          { locale: "id", item: "Antar jemput bandara" },
          { locale: "en", item: "Air-conditioned vehicle" },
          { locale: "id", item: "Kendaraan ber-AC" },
          { locale: "en", item: "6 nights accommodation with breakfast" },
          { locale: "id", item: "Akomodasi 6 malam dengan sarapan" },
          { locale: "en", item: "Meals as indicated" },
          { locale: "id", item: "Makan sesuai itinerary" },
          // { locale: "en", item: "English-speaking guide" },
          // { locale: "id", item: "Pemandu berbahasa Indonesia" },
          { locale: "en", item: "Entrance fees" },
          { locale: "id", item: "Tiket masuk wisata" },
          { locale: "en", item: "Travel Insurance" },
          { locale: "id", item: "Asuransi Perjalanan" },
        ],
      },
      excludes: {
        create: [
          { locale: "en", item: "Domestic flights" },
          { locale: "id", item: "Penerbangan domestik" },
          { locale: "en", item: "Personal expenses" },
          { locale: "id", item: "Pengeluaran pribadi" },
        ],
      },
      tips: {
        create: [
          { locale: "en", tip: "Bring sunscreen and a hat" },
          { locale: "id", tip: "Bawa sunscreen dan topi" },
          { locale: "en", tip: "Bring personal needs" },
          { locale: "id", tip: "Bawa kebutuhan pribadi" },
        ],
      },
    },
  });

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
