import React from 'react';
import { Image, Clock, Tag, Heart, Trash } from 'lucide-react';

const ImageGenerations = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Image Generations</h1>
        <div className="flex space-x-4">
          <select className="rounded-lg border border-gray-300 px-4 py-2">
            <option>All Models</option>
            <option>Stable Diffusion</option>
            <option>DALL-E</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            New Generation
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <div key={id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100">
              <img
                src={`https://source.unsplash.com/random/800x600?sig=${id}`}
                alt="Generated"
                className="object-cover w-full h-48"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">
                  <Clock className="h-4 w-4 inline mr-1" />
                  2 hours ago
                </span>
                <span className="text-sm font-medium text-purple-600">
                  <Tag className="h-4 w-4 inline mr-1" />
                  Stable Diffusion
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                A beautiful landscape with mountains and lakes...
              </p>
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-red-500">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="text-gray-400 hover:text-red-500">
                    <Trash className="h-5 w-5" />
                  </button>
                </div>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGenerations;