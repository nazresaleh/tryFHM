import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, MapPin, Leaf, TreePine, BookOpen, Award } from 'lucide-react';

const Index = () => {
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const [currentProgress, setCurrentProgress] = useState(0);

  const markSectionComplete = (sectionId: string) => {
    if (!completedSections.includes(sectionId)) {
      const newCompleted = [...completedSections, sectionId];
      setCompletedSections(newCompleted);
      setCurrentProgress((newCompleted.length / 16) * 100);
    }
  };

  const genera = [
    {
      id: 'anisoptera',
      name: 'Anisoptera',
      commonNames: 'Mersawa, Pengiran',
      description: 'Medium to large trees up to 50m tall with buttressed trunks. Characterized by winged fruits and resinous wood.',
      keyFeatures: ['Buttressed trunk', 'Winged fruits', 'Resinous wood', 'Large leaves'],
      distribution: 'Peninsular Malaysia, Borneo, Sumatra',
      image: '/images/mersawa_anisoptera_1.jpeg'
    },
    {
      id: 'cotylelobium',
      name: 'Cotylelobium',
      commonNames: 'Resak',
      description: 'Heavy hardwood trees with distinctive golden-brown to red-brown heartwood.',
      keyFeatures: ['Heavy hardwood', 'Golden-brown heartwood', 'Sharply defined sapwood', 'Durable timber'],
      distribution: 'Peninsular Malaysia, Borneo, Sumatra',
      image: '/images/dipterocarpaceae_morphology_2.jpeg'
    },
    {
      id: 'dipterocarpus',
      name: 'Dipterocarpus',
      commonNames: 'Keruing',
      description: 'Large emergent trees reaching over 45m with straight cylindrical boles and resinous properties.',
      keyFeatures: ['Large emergent trees', 'Resinous properties', 'Red-brown heartwood', 'Straight bole'],
      distribution: 'Throughout Southeast Asia',
      image: '/images/keruing_dipterocarpus_2.jpeg'
    },
    {
      id: 'dryobalanops',
      name: 'Dryobalanops',
      commonNames: 'Kapur, Keladan',
      description: 'Large trees up to 65m with camphor-like odor and distinctive flaky bark.',
      keyFeatures: ['Camphor-like odor', 'Flaky bark', 'Red heartwood', 'Buttressed trunk'],
      distribution: 'Borneo, Peninsular Malaysia, Sumatra',
      image: '/images/dipterocarp_genera_species_1.jpeg'
    },
    {
      id: 'hopea',
      name: 'Hopea',
      commonNames: 'Merawan, Giam, Selangan, Luis',
      description: 'Diverse genus with over 100 species, ranging from small to large trees.',
      keyFeatures: ['Diverse size range', 'Simple leaves', 'Small flowers', 'Winged fruits'],
      distribution: 'Southeast Asia, concentrated in Borneo',
      image: '/images/dipterocarp_genera_species_2.jpeg'
    },
    {
      id: 'neobalanocarpus',
      name: 'Neobalanocarpus',
      commonNames: 'Cengal',
      description: 'Monotypic genus endemic to Peninsular Malaysia. Highly valued timber species, now vulnerable.',
      keyFeatures: ['Endemic to Peninsula', 'Extremely durable wood', 'Large buttresses', 'Vulnerable status'],
      distribution: 'Peninsular Malaysia only',
      image: '/images/dipterocarpaceae_morphology_4.jpeg'
    },
    {
      id: 'parashorea',
      name: 'Parashorea',
      commonNames: 'Gerutu, Urat Mata, Meranti Putih',
      description: 'Very large trees reaching 200ft with straight cylindrical boles and light-colored wood.',
      keyFeatures: ['Very large trees', 'Light-colored wood', 'Straight bole', 'Large buttresses'],
      distribution: 'Sabah, Philippines, limited distribution',
      image: '/images/dipterocarpaceae_morphology_3.jpeg'
    },
    {
      id: 'shorea',
      name: 'Shorea',
      commonNames: 'Meranti, Seraya, Balau, Damar Hitam',
      description: 'Largest genus with diverse timber groups including the world\'s tallest tropical tree.',
      keyFeatures: ['Largest genus', 'Diverse timber types', 'Tallest tropical trees', 'Economic importance'],
      distribution: 'Throughout Southeast Asia',
      image: '/images/shorea_meranti_1.jpeg'
    },
    {
      id: 'upuna',
      name: 'Upuna',
      commonNames: 'Upun, Penyau',
      description: 'Small genus of trees found in Borneo with distinctive characteristics.',
      keyFeatures: ['Small genus', 'Borneo endemic', 'Medium-sized trees', 'Limited distribution'],
      distribution: 'Borneo',
      image: '/images/dipterocarpaceae_morphology_5.jpeg'
    },
    {
      id: 'vatica',
      name: 'Vatica',
      commonNames: 'Resak',
      description: 'Trees with fine brown heartwood and green tinge, often grouped with Cotylelobium.',
      keyFeatures: ['Fine brown heartwood', 'Green tinge', 'Heavy hardwood', 'Durable timber'],
      distribution: 'Southeast Asia',
      image: '/images/additional_genera_dipterocarp_1.jpeg'
    },
    {
      id: 'anthoshorea',
      name: 'Anthoshorea',
      commonNames: 'White Meranti group',
      description: 'Recently separated from Shorea, includes white meranti species with light-colored timber.',
      keyFeatures: ['White meranti timber', 'Light-colored wood', 'Construction use', 'Wind-dispersed fruits'],
      distribution: 'Peninsular Malaysia, Borneo',
      image: '/images/dipterocarpaceae_morphology_1.png'
    },
    {
      id: 'doona',
      name: 'Doona',
      commonNames: 'Sri Lankan dipterocarps',
      description: 'Endemic to Sri Lanka, separated from Shorea based on morphological differences.',
      keyFeatures: ['Sri Lanka endemic', 'Larger flowers', 'Elongated anthers', 'Threatened status'],
      distribution: 'Sri Lanka only',
      image: '/images/dipterocarpaceae_morphology_2.jpeg'
    },
    {
      id: 'neohopea',
      name: 'Neohopea',
      commonNames: 'Borneo endemic',
      description: 'Monotypic genus with single species N. isoptera, endemic to Borneo lowlands.',
      keyFeatures: ['Monotypic genus', 'Borneo endemic', 'Canopy tree', 'Up to 60m tall'],
      distribution: 'Borneo lowlands',
      image: '/images/dipterocarpaceae_morphology_3.jpeg'
    },
    {
      id: 'pentacme',
      name: 'Pentacme',
      commonNames: 'Indo-Chinese elements',
      description: 'Found in seasonal forests of Thailand and Indo-China region.',
      keyFeatures: ['Seasonal forests', 'Larger flowers', 'Elongated anthers', 'Deciduous habit'],
      distribution: 'Thailand, Indo-China',
      image: '/images/dipterocarpaceae_morphology_4.jpeg'
    },
    {
      id: 'richetia',
      name: 'Richetia',
      commonNames: 'Yellow Meranti',
      description: 'Includes the world\'s second tallest flowering plant (R. faguetiana) and yellow meranti timber.',
      keyFeatures: ['Yellow meranti timber', 'Very tall trees', 'Light construction use', 'Black resin'],
      distribution: 'Borneo, Peninsular Malaysia, Thailand',
      image: '/images/dipterocarpaceae_morphology_5.jpeg'
    },
    {
      id: 'rubroshorea',
      name: 'Rubroshorea',
      commonNames: 'Red Meranti',
      description: 'Red meranti group with dark red heartwood and high-quality timber.',
      keyFeatures: ['Red meranti timber', 'Dark red heartwood', 'Fast-growing', 'High-quality wood'],
      distribution: 'Borneo, Peninsular Malaysia, Java',
      image: '/images/shorea_meranti_2.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-4 border-green-600">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <TreePine className="h-12 w-12 text-green-600" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Family Dipterocarpaceae in Malaysia</h1>
                <p className="text-lg text-gray-600">Interactive Learning Guide for Undergraduate Forestry Students</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-2">
                <Award className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium">Progress: {Math.round(currentProgress)}%</span>
              </div>
              <Progress value={currentProgress} className="w-32" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="introduction" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2">
            <TabsTrigger value="introduction" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Introduction</span>
            </TabsTrigger>
            <TabsTrigger value="morphology" className="flex items-center space-x-2">
              <Leaf className="h-4 w-4" />
              <span>Morphology</span>
            </TabsTrigger>
            <TabsTrigger value="genera" className="flex items-center space-x-2">
              <TreePine className="h-4 w-4" />
              <span>Genera</span>
            </TabsTrigger>
            <TabsTrigger value="identification" className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Identification</span>
            </TabsTrigger>
          </TabsList>

          {/* Part One: Introduction */}
          <TabsContent value="introduction" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-6 w-6 text-green-600" />
                  <span>Part One: Introduction to Family Dipterocarpaceae</span>
                </CardTitle>
                <CardDescription>
                  Learn about the origin, distribution, and defining characteristics of this important tropical tree family.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="origin">
                    <AccordionTrigger className="text-lg font-semibold">
                      1. Origin and Distribution
                      {completedSections.includes('origin') && <CheckCircle className="h-5 w-5 text-green-500 ml-2" />}
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Global Distribution</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Pantropical distribution from South America to Southeast Asia</li>
                            <li>Greatest diversity in Borneo with over 267 species</li>
                            <li>Extends from northern South America to Africa, Seychelles, India, Indochina, Indonesia, Malaysia, and Philippines</li>
                            <li>Dominant in lowland tropical rainforests</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Malaysian Distribution</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>157 species in Peninsular Malaysia</li>
                            <li>Over 57% have restricted distribution patterns</li>
                            <li>Most important timber family in Malaysian forestry</li>
                            <li>Form dominant trees in mixed dipterocarp forests</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <img src="/images/dipterocarpaceae_morphology_1.png" alt="Dipterocarpaceae distribution" className="w-full max-w-md mx-auto rounded-lg shadow-md" />
                      </div>
                      <Button onClick={() => markSectionComplete('origin')} className="mt-4">
                        Mark as Complete
                      </Button>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="morphology-intro">
                    <AccordionTrigger className="text-lg font-semibold">
                      2. Morphological Characters Defining Family Dipterocarpaceae
                      {completedSections.includes('morphology-intro') && <CheckCircle className="h-5 w-5 text-green-500 ml-2" />}
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Vegetative Characters</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li><strong>Habit:</strong> Large forest trees, 40-70m tall, some over 80m</li>
                            <li><strong>Leaves:</strong> Simple, alternate, stipulate, often leathery</li>
                            <li><strong>Venation:</strong> Pinnate with prominent secondary veins</li>
                            <li><strong>Bark:</strong> Often fissured, may be resinous</li>
                            <li><strong>Buttresses:</strong> Often present, especially in large species</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Reproductive Characters</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li><strong>Flowers:</strong> Bisexual, actinomorphic, 5-merous</li>
                            <li><strong>Calyx:</strong> 5 sepals, often enlarged in fruit</li>
                            <li><strong>Petals:</strong> 5, free, often white or pink</li>
                            <li><strong>Stamens:</strong> Usually numerous (10-∞)</li>
                            <li><strong>Fruit:</strong> Nut-like, often with wing-like calyx lobes</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <img src="/images/dipterocarpaceae_morphology_2.jpeg" alt="Dipterocarpaceae morphology" className="w-full max-w-md mx-auto rounded-lg shadow-md" />
                      </div>
                      <Button onClick={() => markSectionComplete('morphology-intro')} className="mt-4">
                        Mark as Complete
                      </Button>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="genera-distribution">
                    <AccordionTrigger className="text-lg font-semibold">
                      3. Genera in Dipterocarpaceae and Distribution
                      {completedSections.includes('genera-distribution') && <CheckCircle className="h-5 w-5 text-green-500 ml-2" />}
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Major Genera (by species count)</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li><strong>Shorea:</strong> 196 species (largest genus)</li>
                            <li><strong>Hopea:</strong> 104 species</li>
                            <li><strong>Dipterocarpus:</strong> 70 species</li>
                            <li><strong>Vatica:</strong> 65 species</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Recently Segregated Genera</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li><strong>Anthoshorea:</strong> White meranti group</li>
                            <li><strong>Rubroshorea:</strong> Red meranti group</li>
                            <li><strong>Richetia:</strong> Yellow meranti group</li>
                            <li><strong>Neohopea:</strong> Borneo endemic</li>
                            <li><strong>Pentacme:</strong> Indo-Chinese elements</li>
                            <li><strong>Doona:</strong> Sri Lankan endemics</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Other Important Genera</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li><strong>Dryobalanops:</strong> Kapur trees</li>
                            <li><strong>Anisoptera:</strong> Mersawa group</li>
                            <li><strong>Neobalanocarpus:</strong> Cengal (monotypic)</li>
                            <li><strong>Parashorea:</strong> Gerutu group</li>
                            <li><strong>Cotylelobium:</strong> Resak group</li>
                            <li><strong>Upuna:</strong> Borneo endemics</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <img src="/images/dipterocarp_genera_species_1.jpeg" alt="Dipterocarp genera" className="w-full max-w-md mx-auto rounded-lg shadow-md" />
                      </div>
                      <Button onClick={() => markSectionComplete('genera-distribution')} className="mt-4">
                        Mark as Complete
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Morphology Tab */}
          <TabsContent value="morphology" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Leaf className="h-6 w-6 text-green-600" />
                  <span>Detailed Morphological Features</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <img src="/images/dipterocarpaceae_morphology_3.jpeg" alt="Morphological features" className="w-full rounded-lg shadow-md" />
                    <div>
                      <h4 className="font-semibold mb-2">Leaf Characteristics</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Simple, alternate arrangement</li>
                        <li>Stipules present, often caducous</li>
                        <li>Pinnate venation with prominent secondaries</li>
                        <li>Leathery texture (coriaceous)</li>
                        <li>Entire or slightly toothed margins</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <img src="/images/dipterocarpaceae_morphology_4.jpeg" alt="Flower and fruit features" className="w-full rounded-lg shadow-md" />
                    <div>
                      <h4 className="font-semibold mb-2">Flower & Fruit Features</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Flowers in paniculate inflorescences</li>
                        <li>Bisexual, actinomorphic flowers</li>
                        <li>Calyx with 5 sepals, often accrescent</li>
                        <li>Fruits with wing-like structures for dispersal</li>
                        <li>Single-seeded nuts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Genera Overview */}
          <TabsContent value="genera" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TreePine className="h-6 w-6 text-green-600" />
                  <span>Genera Overview</span>
                </CardTitle>
                <CardDescription>
                  Quick reference guide to all 16 genera in the Dipterocarpaceae family
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {genera.map((genus) => (
                    <Card key={genus.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{genus.name}</CardTitle>
                          {completedSections.includes(genus.id) && <CheckCircle className="h-5 w-5 text-green-500" />}
                        </div>
                        <Badge variant="secondary" className="w-fit">{genus.commonNames}</Badge>
                      </CardHeader>
                      <CardContent>
                        <img src={genus.image} alt={genus.name} className="w-full h-32 object-cover rounded-md mb-2" />
                        <p className="text-sm text-gray-600 mb-2">{genus.description}</p>
                        <p className="text-xs text-gray-500"><strong>Distribution:</strong> {genus.distribution}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Part Two: Detailed Identification */}
          <TabsContent value="identification" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6 text-green-600" />
                  <span>Part Two: Description and Identification</span>
                </CardTitle>
                <CardDescription>
                  Detailed identification guide for all 16 genera with key diagnostic features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-2">
                  {genera.map((genus, index) => (
                    <AccordionItem key={genus.id} value={genus.id}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center space-x-3">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                            {index + 1}
                          </span>
                          <div>
                            <div className="font-semibold">{genus.name}</div>
                            <div className="text-sm text-gray-500">{genus.commonNames}</div>
                          </div>
                          {completedSections.includes(genus.id) && <CheckCircle className="h-5 w-5 text-green-500" />}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid md:grid-cols-2 gap-6 pt-4">
                          <div>
                            <img src={genus.image} alt={genus.name} className="w-full rounded-lg shadow-md mb-4" />
                            <div className="space-y-2">
                              <h4 className="font-semibold">Key Identification Features:</h4>
                              <ul className="list-disc list-inside space-y-1 text-sm">
                                {genus.keyFeatures.map((feature, idx) => (
                                  <li key={idx}>{feature}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2">Description:</h4>
                              <p className="text-sm text-gray-700">{genus.description}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Distribution:</h4>
                              <p className="text-sm text-gray-700">{genus.distribution}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Common Names:</h4>
                              <Badge variant="outline">{genus.commonNames}</Badge>
                            </div>
                            <Button 
                              onClick={() => markSectionComplete(genus.id)} 
                              className="w-full mt-4"
                              disabled={completedSections.includes(genus.id)}
                            >
                              {completedSections.includes(genus.id) ? 'Completed' : 'Mark as Studied'}
                            </Button>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
