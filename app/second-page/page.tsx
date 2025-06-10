"use client"
import { useEffect, useState, useCallback } from "react"
import { useTheme } from "next-themes"
import { ExternalLink } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import type { Product } from "./types"
import { Modal, FeatureList, OrderingInstructions } from "./components"
import {
  productData,
  imageSources,
  getInstagramBoosterFeatures,
  getTikTokBoosterFeatures,
  getTelegramBoosterFeatures,
  getFacebookBoosterFeatures,
} from "./data"

export default function SecondPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeCategory, setActiveCategory] = useState("paket_bisnis")
  const [activeSubcategory, setActiveSubcategory] = useState("business")
  const [activeModal, setActiveModal] = useState<Product["modalType"]>(null)
  const [modalProduct, setModalProduct] = useState<Product | null>(null)

  const [instagramBoosterOption, setInstagramBoosterOption] = useState("3000")
  const [tiktokBoosterOption, setTiktokBoosterOption] = useState("2000")
  const [telegramBoosterOption, setTelegramBoosterOption] = useState("3000")
  const [facebookBoosterOption, setFacebookBoosterOption] = useState("3000")
  const [boosterLink, setBoosterLink] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  const getProductDisplayData = useCallback(
    (product: Product): Product => {
      let currentPrice = product.price
      let currentFeatures = product.features || []

      if (product.name === "Instagram Booster") {
        currentPrice =
          instagramBoosterOption === "3000"
            ? "Rp 50,000"
            : instagramBoosterOption === "5000"
              ? "Rp 80,000"
              : "Rp 150,000"
        currentFeatures = getInstagramBoosterFeatures(instagramBoosterOption)
      } else if (product.name === "TikTok Booster") {
        currentPrice = tiktokBoosterOption === "2000" ? "Rp 50,000" : "Rp 100,000"
        currentFeatures = getTikTokBoosterFeatures(tiktokBoosterOption)
      } else if (product.name === "Telegram Booster") {
        currentPrice =
          telegramBoosterOption === "3000" ? "Rp 50,000" : telegramBoosterOption === "5000" ? "Rp 70,000" : "Rp 140,000"
        currentFeatures = getTelegramBoosterFeatures(telegramBoosterOption)
      } else if (product.name === "Facebook Booster") {
        currentPrice =
          facebookBoosterOption === "3000" ? "Rp 50,000" : facebookBoosterOption === "5000" ? "Rp 80,000" : "Rp 150,000"
        currentFeatures = getFacebookBoosterFeatures(facebookBoosterOption)
      }
      return { ...product, price: currentPrice, features: currentFeatures }
    },
    [instagramBoosterOption, tiktokBoosterOption, telegramBoosterOption, facebookBoosterOption],
  )

  const filteredProducts = productData.filter((product) => {
    if (product.category !== activeCategory) return false
    if (activeCategory === "website") {
      return product.subcategory === activeSubcategory
    }
    return true
  })

  const groupedProducts: Product[][] = []
  for (let i = 0; i < filteredProducts.length; i += 2) {
    groupedProducts.push(filteredProducts.slice(i, i + 2))
  }

  const openModal = useCallback(
    (type: Product["modalType"], product?: Product) => {
      setActiveModal(type)
      if (product) {
        setModalProduct(getProductDisplayData(product))
      } else {
        setModalProduct(null)
      }
    },
    [getProductDisplayData],
  )

  const closeModal = useCallback(() => {
    setActiveModal(null)
    setModalProduct(null)
  }, [])

  const getButtonClasses = (isActive: boolean) => {
    const baseClasses = "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300"
    const activeClasses = theme === "dark" ? "bg-blue-600 text-white shadow-lg" : "bg-blue-500 text-white shadow-lg"
    const inactiveClasses =
      theme === "dark"
        ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
        : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
  }

  if (!mounted) return null

  return (
    <div className={`min-h-screen pt-20 pb-8 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:flex sm:flex-row sm:justify-center gap-2 sm:gap-4 mb-6">
          <button
            onClick={() => {
              setActiveCategory("paket_bisnis")
            }}
            className={getButtonClasses(activeCategory === "paket_bisnis")}
          >
            Paket Bisnis
          </button>
          <button
            onClick={() => {
              setActiveCategory("website")
              setActiveSubcategory("business")
            }}
            className={getButtonClasses(activeCategory === "website")}
          >
            Website
          </button>
          <button
            onClick={() => {
              setActiveCategory("sosmed_booster")
            }}
            className={getButtonClasses(activeCategory === "sosmed_booster")}
          >
            Sosmed Booster
          </button>
          <button
            onClick={() => {
              setActiveCategory("lainnya")
            }}
            className={getButtonClasses(activeCategory === "lainnya")}
          >
            Lainnya
          </button>
        </div>

        {activeCategory === "website" && (
          <div className="flex justify-center gap-2 mb-6">
            <button
              onClick={() => setActiveSubcategory("business")}
              className={getButtonClasses(activeSubcategory === "business")}
            >
              Bisnis
            </button>
            <button
              onClick={() => setActiveSubcategory("non-business")}
              className={getButtonClasses(activeSubcategory === "non-business")}
            >
              Non-Bisnis
            </button>
          </div>
        )}

        <div className="space-y-3 sm:space-y-4">
          {groupedProducts.map((group, groupIndex) => (
            <div key={groupIndex} className="grid grid-cols-2 gap-3 sm:gap-4">
              {group.map((product) => {
                const displayProduct = getProductDisplayData(product)

                return (
                  <div
                    key={displayProduct.name + (displayProduct.subcategory || "")}
                    className={`flex flex-col rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg ${
                      theme === "dark" ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"
                    } p-3`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3
                        className={`font-bold leading-tight text-sm ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {displayProduct.name}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded-md font-bold whitespace-nowrap ml-2 text-xs shadow-sm ${
                          displayProduct.price === "Rp 0"
                            ? theme === "dark"
                              ? "bg-green-600 text-white"
                              : "bg-green-500 text-white"
                            : theme === "dark"
                              ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                              : "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                        }`}
                      >
                        {displayProduct.price}
                      </span>
                    </div>

                    <div className="flex-grow">
                      {["Instagram Booster", "TikTok Booster", "Telegram Booster", "Facebook Booster"].includes(
                        displayProduct.name,
                      ) && (
                        <div className="mb-3 space-y-2">
                          {displayProduct.name === "Instagram Booster" && (
                            <select
                              value={instagramBoosterOption}
                              onChange={(e) => setInstagramBoosterOption(e.target.value)}
                              className={`w-full px-2 py-1.5 rounded-md text-xs border ${
                                theme === "dark"
                                  ? "bg-gray-700 border-gray-600 text-gray-200"
                                  : "bg-white border-gray-300 text-gray-700"
                              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            >
                              <option value="3000">3000 Followers</option>
                              <option value="5000">5000 Followers</option>
                              <option value="10000">10000 Followers</option>
                            </select>
                          )}

                          {displayProduct.name === "TikTok Booster" && (
                            <select
                              value={tiktokBoosterOption}
                              onChange={(e) => setTiktokBoosterOption(e.target.value)}
                              className={`w-full px-2 py-1.5 rounded-md text-xs border ${
                                theme === "dark"
                                  ? "bg-gray-700 border-gray-600 text-gray-200"
                                  : "bg-white border-gray-300 text-gray-700"
                              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            >
                              <option value="2000">2000 Followers</option>
                              <option value="5000">5000 Followers</option>
                            </select>
                          )}

                          {displayProduct.name === "Telegram Booster" && (
                            <select
                              value={telegramBoosterOption}
                              onChange={(e) => setTelegramBoosterOption(e.target.value)}
                              className={`w-full px-2 py-1.5 rounded-md text-xs border ${
                                theme === "dark"
                                  ? "bg-gray-700 border-gray-600 text-gray-200"
                                  : "bg-white border-gray-300 text-gray-700"
                              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            >
                              <option value="3000">3000 Followers</option>
                              <option value="5000">5000 Followers</option>
                              <option value="10000">10000 Followers</option>
                            </select>
                          )}

                          {displayProduct.name === "Facebook Booster" && (
                            <select
                              value={facebookBoosterOption}
                              onChange={(e) => setFacebookBoosterOption(e.target.value)}
                              className={`w-full px-2 py-1.5 rounded-md text-xs border ${
                                theme === "dark"
                                  ? "bg-gray-700 border-gray-600 text-gray-200"
                                  : "bg-white border-gray-300 text-gray-700"
                              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            >
                              <option value="3000">3000 Followers</option>
                              <option value="5000">5000 Followers</option>
                              <option value="10000">10000 Followers</option>
                            </select>
                          )}
                          <input
                            type="text"
                            value={boosterLink}
                            onChange={(e) => setBoosterLink(e.target.value)}
                            placeholder="Masukkan Link Akun"
                            className={`w-full mt-2 px-2 py-1.5 rounded-md text-xs border ${
                              theme === "dark"
                                ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
                                : "bg-white border-gray-300 text-gray-700 placeholder-gray-500"
                            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                          />
                          {displayProduct.features && displayProduct.features.length > 0 && (
                            <div className="mt-1">
                              <FeatureList features={displayProduct.features} />
                            </div>
                          )}
                        </div>
                      )}

                      {displayProduct.name !== "Instagram Booster" &&
                        displayProduct.name !== "TikTok Booster" &&
                        displayProduct.name !== "Telegram Booster" &&
                        displayProduct.name !== "Facebook Booster" &&
                        displayProduct.features &&
                        displayProduct.features.length > 0 && (
                          <div className="mb-3">
                            <FeatureList features={displayProduct.features} />
                          </div>
                        )}
                    </div>

                    <div className="flex gap-2 mt-auto">
                      <button
                        className={`flex-1 py-1.5 px-3 rounded-md font-medium text-xs transition-all duration-300 shadow-sm hover:shadow-md ${
                          theme === "dark"
                            ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                            : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                        }`}
                      >
                        Bayar
                      </button>
                      {displayProduct.modalType &&
                        (displayProduct.exampleUrl ||
                          imageSources[displayProduct.modalType as keyof typeof imageSources]?.length > 0 ||
                          displayProduct.modalType === "details") && (
                          <button
                            onClick={() => openModal(displayProduct.modalType, displayProduct)}
                            className={`px-2 py-1.5 rounded-md font-medium text-xs transition-all duration-300 border flex items-center gap-1 shadow-sm hover:shadow-md ${
                              theme === "dark"
                                ? "border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500"
                                : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                            }`}
                          >
                            {displayProduct.modalType === "example" ? (
                              <>
                                <ExternalLink className="h-3 w-3" /> Contoh
                              </>
                            ) : (
                              "Rincian"
                            )}
                          </button>
                        )}
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        <Modal isOpen={activeModal === "example" && modalProduct !== null} onClose={closeModal} size="full">
          {modalProduct?.exampleUrl && (
            <iframe
              src={modalProduct.exampleUrl}
              title={`Contoh ${modalProduct.name}`}
              className="w-full h-full border-0"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          )}
        </Modal>

        <Modal isOpen={activeModal === "details" && modalProduct !== null} onClose={closeModal} size="md">
          <OrderingInstructions />
        </Modal>

        <Modal
          isOpen={
            (activeModal === "contentImages" && modalProduct?.name === "Desain Konten") ||
            (activeModal === "seoImages" && modalProduct?.name === "SEO Website") ||
            (activeModal === "adsImages" && modalProduct?.name === "Jasa Iklan Online")
          }
          onClose={closeModal}
          size="lg"
        >
          <Swiper spaceBetween={10} slidesPerView={1} className="w-full h-64 md:h-96">
            {modalProduct &&
              imageSources[modalProduct.modalType as keyof typeof imageSources]?.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-full">
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`${modalProduct.name} Contoh ${i + 1}`}
                      className="w-full h-full object-contain rounded-md"
                    />
                    <span
                      className={`absolute top-2 left-2 px-2 py-1 text-xs md:text-sm font-medium text-white bg-black bg-opacity-60 rounded`}
                    >
                      Gambar {i + 1}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </Modal>

        <Modal
          isOpen={activeModal === "videoPromo" && modalProduct?.name === "Video Promosi"}
          onClose={closeModal}
          size="lg"
        >
          {modalProduct?.exampleUrl && (
            <div className="aspect-video w-full">
              <iframe
                src={modalProduct.exampleUrl}
                title={`Contoh ${modalProduct.name}`}
                className="w-full h-full rounded-md"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </Modal>
      </div>
    </div>
  )
}
