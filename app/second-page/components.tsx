"use client"
import { useTheme } from "next-themes"
import { CheckCircle, X } from "lucide-react"
import type { ModalProps, FeatureListProps } from "./types"

// Komponen Modal
export function Modal({ isOpen, onClose, children, size = "full" }: ModalProps) {
  const { theme } = useTheme()
  if (!isOpen) return null

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-2xl",
    full: "max-w-full w-full h-[90vh]",
  }[size]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div
        className={`${sizeClasses} ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        } rounded-xl overflow-hidden shadow-2xl relative p-4`}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-3 rounded-md transition-all duration-200 z-10 ${
            theme === "dark"
              ? "hover:bg-gray-700 text-gray-400 hover:text-white"
              : "hover:bg-gray-200 text-gray-600 hover:text-gray-900"
          }`}
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  )
}

// Komponen FeatureList
export function FeatureList({ features, textColor }: FeatureListProps) {
  const { theme } = useTheme()
  return (
    <ul className="space-y-1">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center">
          <CheckCircle
            className={`h-3 w-3 mr-2 flex-shrink-0 ${theme === "dark" ? "text-green-400" : "text-green-500"}`}
          />
          <span className={`text-xs ${textColor || (theme === "dark" ? "text-gray-300" : "text-gray-600")}`}>
            {feature}
          </span>
        </li>
      ))}
    </ul>
  )
}

// Komponen untuk instruksi pemesanan
export function OrderingInstructions() {
  const { theme } = useTheme()
  return (
    <div className="space-y-4">
      <h3 className={`text-lg font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Cara Pemesanan</h3>
      <div className="space-y-3">
        <div className={`p-3 rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`}>
          <h4 className={`font-semibold text-sm mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            1. Pilih Paket
          </h4>
          <p className={`text-xs ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </div>
        <div className={`p-3 rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`}>
          <h4 className={`font-semibold text-sm mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            2. Konsultasi
          </h4>
          <p className={`text-xs ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
            Diskusikan kebutuhan spesifik dan detail proyek dengan tim kami
          </p>
        </div>
        <div className={`p-3 rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`}>
          <h4 className={`font-semibold text-sm mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            3. Pembayaran
          </h4>
          <p className={`text-xs ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
            Lakukan pembayaran sesuai paket yang dipilih
          </p>
        </div>
        <div className={`p-3 rounded-lg ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`}>
          <h4 className={`font-semibold text-sm mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            4. Pengerjaan
          </h4>
          <p className={`text-xs ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
            Tim kami akan mulai mengerjakan proyek sesuai timeline yang disepakati
          </p>
        </div>
      </div>
    </div>
  )
}
